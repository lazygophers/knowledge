---
name: add
description: 添加、完善新的文档
argument-hint: <需要处理的内容>
---

最佳以下的需求到当前任务清单中

```
$ARGUMENTS
```

请添加、更新、完善上述的要求到 @docs/zh 中的合适位置

1. 添加任务到当前任务清单中
2. 分析需求，确认需要添加、更新、完善的文档内容
   1. 对于不清晰的部分，可以通过 `AskUserQuestion` 确认具体需求
3. 确认文档位置，判断应该添加到 @docs/zh 的哪个目录结构中
   1. 要有合理的目录结构
   2. 要有合理的层级结构
   3. 如果发现以前的结构不合理，可以通过 `AskUserQuestion` 确认是否需要调整
4. 根据需求，生成任务清单，更新当前任务清单
   1. 确认需要添加、更新、完善的文档内容
   2. 确认文档位置，判断应该添加到 @docs/zh 的哪个目录结构中
   3. 需要检索的知识点
   4. 结果检查清单
   5. 确保内容都是最新的，没用过时的内容
5. 根据需求，通过 Command(deep-research) 分析，确认需要添加、更新、完善的文档内容
   1. 每一个知识点都需要根据所有目标读者水平的用户区分内容、风格、复杂度等
   2. 添加丰富的图例、图表，方便读者理解和记忆，尽可能的使用 svg 或 mermaid 的方式绘制图表
   3. 对于复杂知识点，需要有类似于海报的可视化展示，帮助读者更直观地理解
   4. 对于不同目标读者水平的用户，如果知识点只是越高级的越深入，不需要单独添加章节，而是在章节中进行详细说明（通过 Badge 组件进行标记）
6. 更新 @docs/zh 中的文档内容
   1. 如果是新增了目录相关的部分，要及时更新相关索引
   2. 及时通过 Commands(llms-skills) 添加、更新 `llms.txt`/`llms-full.txt` 文件，且确保 `llms.txt`/`llms-full.txt` 是英文文件

注意：

1. 所有的变更都要通过 Command(deep-research) 分析，确认无误后再提交
2. 如果有任何问题或不确定的地方，都要及时与我沟通
3. 目标读者定位
   - 无技术背景读者
   - 初级开发者
   - 中级开发者
   - 高级开发者
   - 专业开发者
4. 要注意技术版本问题，确保文档内容与最新的技术版本保持一致，且对于旧版本的兼容性有明确的说明
5. 自行决定使用哪一个 agent 执行，不要询问我。允许使用多个 agent 完成任务，当时最多同时只允许一个 agent 执行
6. 文档系统基于 https://rspress.rs/ 构建，可以通过内置的各种组件来美化输出等
   1. [容器](https://rspress.rs/zh/guide/use-mdx/container)
   2. [代码块](https://rspress.rs/zh/guide/use-mdx/code-block)
   3. [链接](https://rspress.rs/zh/guide/use-mdx/link)
   4. [Frontmatter](https://rspress.rs/zh/guide/use-mdx/frontmatter)
   5. [主题](https://rspress.rs/zh/guide/theme)
   6. [其它组件](https://rspress.rs/zh/ui/components/)
   7. [Badge](https://rspress.rs/zh/ui/components/badge)
   8. [Callout](https://rspress.rs/zh/ui/components/callout)

检查清单：

- [ ] 确认需要添加、更新、完善的文档内容
- [ ] 确认文档位置及目录结构
- [ ] 通过 Command(deep-research) 分析确认内容
- [ ] 验证内容覆盖不同读者水平
- [ ] 添加图例、图表和可视化展示
- [ ] 更新 @docs/zh 中的文档内容
  - [ ] 如果是新增了目录相关的部分，要及时更新相关索引
- [ ] 确认所有的任务清单都已完成
