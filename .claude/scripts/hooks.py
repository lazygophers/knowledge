import json
import os
import subprocess
import sys
import traceback
from typing import Dict, Any

from lib import logging
from lib.hooks import load_hooks
from lib.hooks.pre_tool_use import handle_pre_tool_use, PreToolUseConfig
from lib.utils.env import get_project_dir

prompt = {
    "SessionStart": [],
    "UserPromptSubmit": [],
}

def filepath_to_slash(path: str) -> str:
	"""转换路径分隔符"""
	try:
		if sys.platform.startswith('win'):
			return path.replace('/', '\\')
		else:
			return path.replace('\\', '/')
	except Exception as e:
		logging.error(f"路径转换失败: {e}, path={path}")
		return path


pre_tool_use_config = PreToolUseConfig()
pre_tool_use_config.safe_remove_files = [
	"pyproject.toml",
	"uv.lock",
 	"doc_build",
]
pre_tool_use_config.safe_edit_files = [
	"pyproject.toml",
	"uv.lock",
 	"doc_build",
]
pre_tool_use_config.safe_read_files = [
	"go.sum",
	"uv.lock",
 	"doc_build",
]

def handle_session_start() -> str:
	"""处理 SessionStart 事件"""
	try:
		context = "\n- ".join(prompt.get("SessionStart", []))
		return json.dumps({
			"continue": True,
			"suppressOutput": False,
			"hookSpecificOutput": {
				"hookEventName": "SessionStart",
				"additionalContext": "- " + context if context else ""
			}
		})
	except Exception as e:
		logging.error(f"SessionStart 处理异常: {e}\n{traceback.format_exc()}")
		return json.dumps({
			"continue": True,
			"suppressOutput": False,
			"hookSpecificOutput": {
				"hookEventName": "SessionStart",
				"additionalContext": ""
			}
		})


def handle_user_prompt_submit() -> str:
	"""处理 UserPromptSubmit 事件"""
	try:
		context = "\n- ".join(prompt.get("UserPromptSubmit", []))
		return json.dumps({
			"continue": True,
			"suppressOutput": False,
			"hookSpecificOutput": {
				"hookEventName": "UserPromptSubmit",
				"additionalContext": "- " + context if context else ""
			}
		})
	except Exception as e:
		logging.error(f"UserPromptSubmit 处理异常: {e}\n{traceback.format_exc()}")
		return json.dumps({
			"continue": True,
			"suppressOutput": False,
			"hookSpecificOutput": {
				"hookEventName": "UserPromptSubmit",
				"additionalContext": ""
			}
		})

def handle_post_tool_use(input_data: Dict[str, Any]) -> bool | None:
	try:
		if handle_pre_tool_use(input_data, pre_tool_use_config):
			return True

	except Exception as e:
		logging.error(f"PostToolUse 处理异常: {e}\n{traceback.format_exc()}")
		return False


def main():
	"""主函数，捕获所有异常"""
	try:
		input_data = load_hooks()
		logging.info(f"Received input data: {input_data}")

		hook_event_name = input_data.get("hook_event_name", "")
		if not hook_event_name:
			logging.error("缺少 hook_event_name")
			return

		# 路由到不同的处理器
		if hook_event_name == "SessionStart":
			print(handle_session_start())
		elif hook_event_name == "UserPromptSubmit":
			print(handle_user_prompt_submit())
		elif hook_event_name == "PostToolUse":
			handle_post_tool_use(input_data)
		else:
			logging.warning(f"未知的 hook 事件: {hook_event_name}")
	except json.JSONDecodeError as e:
		logging.error(f"JSON 解析错误: {e}\n{traceback.format_exc()}")
	except Exception as e:
		logging.error(f"未捕获的异常: {e}\n{traceback.format_exc()}")
		sys.exit(0)


if __name__ == '__main__':
	main()