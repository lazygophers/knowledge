# Windows 平台 - Go 语言安装指南

本指南提供在 Windows 系统上安装 Go 语言的多种方法。请根据你的情况选择合适的安装方式。

[← 返回安装指南](/golang/install)

---

## 🟢 无技术背景 - MSI 图形化安装（推荐）

**适合人群**：第一次安装软件，希望使用图形界面

### 安装步骤

1. **下载安装包**
   - 访问 [Go 官方下载页](https://go.dev/dl/)
   - 下载 `go1.26.0.windows-amd64.msi`
   - 文件大小约 100-150MB

2. **运行安装程序**
   - 双击下载的 `.msi` 文件
   - 如果弹出安全提示，点击"是"
   - 点击 "Next" 继续

3. **选择安装位置**
   - 默认路径：`C:\Program Files\Go` 或 `C:\Go`
   - 建议保持默认，点击 "Next"

4. **确认安装**
   - 点击 "Install" 开始安装
   - 等待安装完成（约 1-2 分钟）
   - 点击 "Finish" 完成安装

5. **验证安装**
   - 按 `Win + R`，输入 `cmd`，回车
   - 在命令提示符中输入：
   ```cmd
   go version
   ```
   - 看到类似输出即成功：
   ```
   go version go1.26.0 windows/amd64
   ```

### 🔸 卸载方法

```
1. 打开"控制面板" → "程序和功能"
2. 找到 "Go Programming Language"
3. 右键点击 → "卸载"
4. 按照卸载向导完成操作
```

### 常见问题

**Q: 安装后提示找不到 go 命令？**
- 重启命令提示符或电脑
- 检查 PATH 环境变量是否包含 Go 路径

**Q: 安装失败？**
- 确保以管理员身份运行安装程序
- 关闭杀毒软件后重试

---

## 🔵 初级开发者 - Chocolatey 安装

**适合人群**：熟悉命令行，希望自动化安装

### 前置要求
已安装 Chocolatey 包管理器

### 安装命令
```cmd
# 以管理员身份打开 PowerShell，执行：
choco install golang

# 验证安装
go version
```

### 🔸 卸载方法

```cmd
# 以管理员身份打开 PowerShell
choco uninstall golang
```

---

## 🟡 中级开发者 - Scoop 安装

**适合人群**：希望安装到用户目录，不需要管理员权限

### 安装步骤
```powershell
# 1. 安装 Scoop（如果尚未安装）
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex

# 2. 安装 Go
scoop install go

# 3. 验证
go version
```

### 优势
- 安装到用户目录，不需要管理员权限
- 更新方便：`scoop update go`
- 多版本管理：`scoop install go1.25`

### 🔸 卸载方法

```powershell
# 卸载 Go
scoop uninstall go

# 如果不再使用 Scoop，可以卸载 Scoop
scoop uninstall scoop
```

---

## 🟠 高级开发者 - ZIP 便携安装

**适合人群**：需要自定义安装路径或多版本共存

### 安装步骤
```cmd
# 1. 下载 go1.26.0.windows-amd64.zip
# 2. 解压到自定义目录，如 C:\MyTools\go
# 3. 手动配置环境变量：
#    - 右键"此电脑" → 属性 → 高级系统设置 → 环境变量
#    - 在 PATH 中添加：C:\MyTools\go\bin
# 4. 重启命令提示符
go version
```

### 🔸 卸载方法

```cmd
# 1. 从环境变量 PATH 中移除 Go 路径
#    - 右键"此电脑" → 属性 → 高级系统设置 → 环境变量
#    - 从 PATH 中删除对应的 Go 路径

# 2. 删除解压的 Go 目录
rmdir /s C:\MyTools\go
```

---

## 🟡 中级开发者 - 多版本管理

**适合人群**：需要在不同项目间切换 Go 版本

> 💡 **推荐使用 goup**：goup 是跨平台的 Go 版本管理工具，支持 Windows、macOS 和 Linux，安装简单，使用方便。

### 方案：使用 goup（跨平台）

**优势**：
- ✅ 真正的跨平台支持（Windows/macOS/Linux）
- ✅ 一行命令安装，无需预装 Go
- ✅ 支持项目级版本锁定（`.go-version` 文件）
- ✅ 现代化设计，受 Rustup 启发

#### 安装 goup

```powershell
# 一键安装（所有平台通用）
curl.exe -sSf https://raw.githubusercontent.com/owenthereal/goup/master/install.sh | sh

# 或使用 PowerShell
Invoke-Expression "& { $(Invoke-RestMethod https://raw.githubusercontent.com/owenthereal/goup/master/install.ps1) }"

# 加载环境变量
$env:Path = "$env:USERPROFILE\.go\bin;$env:USERPROFILE\.go\current\bin;$env:Path"

# 验证安装
goup version
```

#### 基本使用

```powershell
# 搜索可用版本
goup search 1.21

# 安装最新版本
goup install

# 安装指定版本
goup install 1.26.0
goup install 1.25.5

# 列出已安装版本
goup list

# 切换版本
goup use 1.26.0

# 设置默认版本
goup set 1.26.0

# 验证当前版本
go version
```

#### 项目级版本锁定

```powershell
# 在项目根目录创建 .go-version 文件
"1.26.0" | Out-File -Encoding UTF8 .go-version
```

#### 🔸 卸载 goup

```powershell
# 删除 goup 目录
Remove-Item -Recurse -Force $env:USERPROFILE\.go

# 从环境变量中移除相关路径
# 系统设置 → 环境变量 → 编辑 PATH，删除以下路径：
# %USERPROFILE%\.go\bin
# %USERPROFILE%\.go\current\bin
```

---

## 🔧 Windows 环境变量配置

### 基本配置

```powershell
# PowerShell
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\Go\bin", "User")

# CMD
setx PATH "%PATH%;C:\Program Files\Go\bin"
```

### 中国用户网络加速

```powershell
# 设置国内 Go 代理（选择其一）
go env -w GOPROXY=https://goproxy.cn,direct
# 或
go env -w GOPROXY=https://goproxy.io,direct
```

**国内 Go 代理服务**：
- [https://goproxy.cn](https://goproxy.cn) - 七牛云提供的 Go 模块代理
- [https://goproxy.io](https://goproxy.io) - 全球知名的 Go 模块代理

---

## ❓ Windows 常见问题

### Q: 安装后提示 "command not found: go"
**A**: PATH 环境变量未正确配置，请检查上述配置步骤。

### Q: 多个 Go 版本冲突
**A**: 使用 **goup** 版本管理工具统一管理多版本。goup 支持 Windows、macOS 和 Linux，提供一致的跨平台体验。

### Q: 权限不足
**A**: 以管理员身份运行命令提示符或 PowerShell。

### Q: Windows Defender 阻止安装
**A**: 临时关闭 Windows Defender，或将 Go 安装目录添加到排除列表。

---

[← 返回安装指南](/golang/install) | [继续：Hello World →](/golang/hello)
