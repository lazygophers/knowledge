# Go 语言安装指南

本指南将帮助你在各种操作系统上安装 Go 语言。请根据你的情况选择合适的安装方式。

## 🖥️ 快速选择你的平台

| 操作系统 | 图形化安装 | 命令行安装 | 包管理器 | 便携版 | 多版本管理 |
|---------|-----------|-----------|---------|--------|-----------|
| **Windows** | ✅ MSI 安装包 | ✅ | Chocolatey / Scoop | ✅ ZIP | ✅ goup |
| **macOS** | ✅ PKG 安装包 | ✅ | Homebrew | - | ✅ goup |
| **Linux** | - | ✅ tar.gz | apt / yum / dnf / Snap | ✅ | ✅ goup |

> 💡 **提示**：如果你是第一次安装，推荐使用图形化安装或包管理器方式。
>
> 🌟 **goup** 是跨平台的 Go 版本管理工具，支持 Windows/macOS/Linux，适合需要管理多个 Go 版本的场景。

---

## 🪟 Windows 平台

### 🟢 无技术背景 - MSI 图形化安装（推荐）

**适合人群**：第一次安装软件，希望使用图形界面

#### 安装步骤

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

#### 🔸 卸载方法

```
1. 打开"控制面板" → "程序和功能"
2. 找到 "Go Programming Language"
3. 右键点击 → "卸载"
4. 按照卸载向导完成操作
```

#### 常见问题

**Q: 安装后提示找不到 go 命令？**
- 重启命令提示符或电脑
- 检查 PATH 环境变量是否包含 Go 路径

**Q: 安装失败？**
- 确保以管理员身份运行安装程序
- 关闭杀毒软件后重试

---

### 🔵 初级开发者 - Chocolatey 安装

**适合人群**：熟悉命令行，希望自动化安装

#### 前置要求
已安装 Chocolatey 包管理器

#### 安装命令
```cmd
# 以管理员身份打开 PowerShell，执行：
choco install golang

# 验证安装
go version
```

#### 🔸 卸载方法

```cmd
# 以管理员身份打开 PowerShell
choco uninstall golang
```

---

### 🟡 中级开发者 - Scoop 安装

**适合人群**：希望安装到用户目录，不需要管理员权限

#### 安装步骤
```powershell
# 1. 安装 Scoop（如果尚未安装）
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex

# 2. 安装 Go
scoop install go

# 3. 验证
go version
```

#### 优势
- 安装到用户目录，不需要管理员权限
- 更新方便：`scoop update go`
- 多版本管理：`scoop install go1.25`

#### 🔸 卸载方法

```powershell
# 卸载 Go
scoop uninstall go

# 如果不再使用 Scoop，可以卸载 Scoop
scoop uninstall scoop
```

---

### 🟠 高级开发者 - ZIP 便携安装

**适合人群**：需要自定义安装路径或多版本共存

#### 安装步骤
```cmd
# 1. 下载 go1.26.0.windows-amd64.zip
# 2. 解压到自定义目录，如 C:\MyTools\go
# 3. 手动配置环境变量：
#    - 右键"此电脑" → 属性 → 高级系统设置 → 环境变量
#    - 在 PATH 中添加：C:\MyTools\go\bin
# 4. 重启命令提示符
go version
```

#### 🔸 卸载方法

```cmd
# 1. 从环境变量 PATH 中移除 Go 路径
#    - 右键"此电脑" → 属性 → 高级系统设置 → 环境变量
#    - 从 PATH 中删除对应的 Go 路径

# 2. 删除解压的 Go 目录
rmdir /s C:\MyTools\go
```

---

## 🍎 macOS 平台

### 🟢 无技术背景 - PKG 图形化安装（推荐）

#### 安装步骤

1. **下载安装包**
   - 访问 [Go 官方下载页](https://go.dev/dl/)
   - 选择你的芯片类型：
     - Intel Mac：`go1.26.0.darwin-amd64.pkg`
     - Apple Silicon (M1/M2/M3)：`go1.26.0.darwin-arm64.pkg`

2. **运行安装程序**
   - 双击 `.pkg` 文件
   - 点击"继续"
   - 阅读许可协议，点击"同意"
   - 点击"安装"
   - 输入密码确认

3. **验证安装**
   - 打开"终端"应用
   - 输入：
   ```bash
   go version
   ```
   - 看到类似输出即成功：
   ```
   go version go1.26.0 darwin/arm64
   ```

#### 如何确认芯片类型
- 点击菜单栏  → "关于本机"
- 查看"芯片"或"处理器"信息

#### 🔸 卸载方法

```bash
# 删除 Go 安装目录
sudo rm -rf /usr/local/go

# 从 shell 配置中移除 Go 相关行
# 编辑 ~/.bashrc 或 ~/.zshrc，删除类似以下的行：
# export PATH=$PATH:/usr/local/go/bin

# 重新加载 shell 配置
source ~/.bashrc  # Bash
# 或
source ~/.zshrc   # Zsh
```

---

### 🔵 初级开发者 - Homebrew 安装（推荐）

**适合人群**：熟悉终端命令，希望方便更新

#### 安装步骤
```bash
# 1. 安装 Go
brew install go

# 2. 验证
go version

# 3. 查看安装路径
brew info go
```

#### 更新 Go
```bash
brew upgrade go
```

#### 🔸 卸载方法

```bash
# 使用 Homebrew 卸载
brew uninstall go

# 清理相关配置
brew cleanup
```

---

### 🟡 中级开发者 - 多版本管理

**适合人群**：需要在不同项目间切换 Go 版本

> 💡 **推荐使用 goup**：goup 是跨平台的 Go 版本管理工具，支持 Windows、macOS 和 Linux，安装简单，使用方便。

#### 方案：使用 goup（跨平台）

**优势**：
- ✅ 真正的跨平台支持（Windows/macOS/Linux）
- ✅ 一行命令安装，无需预装 Go
- ✅ 支持项目级版本锁定（`.go-version` 文件）
- ✅ 现代化设计，受 Rustup 启发

##### 安装 goup

```bash
# 一键安装（所有平台通用）
curl -sSf https://raw.githubusercontent.com/owenthereal/goup/master/install.sh | sh

# 加载环境变量
source ~/.go/env

# 验证安装
goup version
```

##### 基本使用

```bash
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

##### 项目级版本锁定

```bash
# 在项目根目录创建 .go-version 文件
echo "1.26.0" > .go-version

# 配合 shell hooks 实现自动切换（需要额外配置）
```

##### 🔸 卸载 goup

```bash
# 删除 goup 目录
rm -rf ~/.go

# 从 shell 配置中移除相关行
# 编辑 ~/.bashrc, ~/.zshrc, ~/.config/fish/config.fish
# 删除类似以下的行:
# export PATH="$HOME/.go/bin:$PATH"
# export PATH="$HOME/.go/current/bin:$PATH"

# 重新加载 shell 配置
source ~/.bashrc  # Bash
# 或
source ~/.zshrc   # Zsh
```

---

### 🟠 高级开发者 - 源码编译

**适合人群**：需要自定义编译选项或贡献代码

#### 编译步骤
```bash
# 1. 安装依赖
brew install go

# 2. 克隆源码
git clone https://go.googlesource.com/go $HOME/go
cd $HOME/go/src
git checkout go1.26.0

# 3. 编译
./all.bash

# 4. 配置环境
export PATH=$PATH:$HOME/go/bin
```

#### 🔸 卸载方法

```bash
# 删除源码目录
rm -rf $HOME/go

# 从 shell 配置中移除 PATH 设置
# 编辑 ~/.bashrc 或 ~/.zshrc，删除对应的行
```

---

## 🐧 Linux 平台

### 🔵 初级开发者 - 官方二进制包（推荐）

**适合人群**：大多数 Linux 用户

#### 安装步骤

```bash
# 1. 移除旧版本（如果有）
sudo rm -rf /usr/local/go

# 2. 下载 Go 1.26
wget https://go.dev/dl/go1.26.0.linux-amd64.tar.gz

# 或使用 curl
curl -O https://go.dev/dl/go1.26.0.linux-amd64.tar.gz

# 3. 解压到 /usr/local
sudo tar -C /usr/local -xzf go1.26.0.linux-amd64.tar.gz

# 4. 配置 PATH（添加到 ~/.bashrc 或 ~/.zshrc）
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
echo 'export PATH=$PATH:$HOME/go/bin' >> ~/.bashrc

# 5. 应用更改
source ~/.bashrc

# 6. 验证
go version
```

#### 无 sudo 权限安装

```bash
# 解压到用户目录
mkdir -p ~/tools
tar -C ~/tools -xzf go1.26.0.linux-amd64.tar.gz

# 配置 PATH
echo 'export PATH=$PATH:$HOME/tools/go/bin' >> ~/.bashrc
source ~/.bashrc
```

#### 🔸 卸载方法

```bash
# 系统安装卸载
sudo rm -rf /usr/local/go

# 用户安装卸载
rm -rf ~/tools/go

# 从 shell 配置中移除 PATH 设置
# 编辑 ~/.bashrc 或 ~/.zshrc，删除对应的行：
# export PATH=$PATH:/usr/local/go/bin
# export PATH=$PATH:$HOME/tools/go/bin

# 重新加载配置
source ~/.bashrc
```

---

### 🟢 Ubuntu/Debian - 包管理器安装

```bash
# 方法1：使用 apt（版本可能较旧）
sudo apt update
sudo apt install golang-go

# 方法2：使用 PPA 获取最新版本
sudo add-apt-repository ppa:longsleep/golang-backports
sudo apt update
sudo apt install golang-go

# 验证
go version
```

#### 🔸 卸载方法

```bash
# apt 安装的卸载
sudo apt remove golang-go

# PPA 安装的卸载
sudo apt remove golang-go
sudo add-apt-repository --remove ppa:longsleep/golang-backports
sudo apt update
```

---

### 🟢 CentOS/RHEL/Fedora - 包管理器安装

```bash
# CentOS/RHEL
sudo yum install golang

# Fedora
sudo dnf install golang

# Arch Linux
sudo pacman -S go

# openSUSE
sudo zypper install go
```

#### 🔸 卸载方法

```bash
# CentOS/RHEL
sudo yum remove golang

# Fedora
sudo dnf remove golang

# Arch Linux
sudo pacman -R go

# openSUSE
sudo zypper remove go
```

---

### 🟢 Snap 安装（通用）

```bash
# 安装 Go
sudo snap install go --classic

# 验证
go version
```

#### 🔸 卸载方法

```bash
# 卸载 Go
sudo snap remove go
```

---

### 🟡 中级开发者 - 多版本管理

**适合人群**：需要在不同项目间切换 Go 版本

> 💡 **推荐使用 goup**：goup 是跨平台的 Go 版本管理工具，与 macOS 和 Windows 使用相同的工具和命令，提供一致的使用体验。

#### 方案：使用 goup（跨平台）

**优势**：
- ✅ 真正的跨平台支持（Windows/macOS/Linux）
- ✅ 一行命令安装，无需预装 Go
- ✅ 支持项目级版本锁定（`.go-version` 文件）

##### 安装 goup

```bash
# 一键安装（所有平台通用）
curl -sSf https://raw.githubusercontent.com/owenthereal/goup/master/install.sh | sh

# 加载环境变量
source ~/.go/env

# 验证安装
goup version
```

##### 基本使用

```bash
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

##### 项目级版本锁定

```bash
# 在项目根目录创建 .go-version 文件
echo "1.26.0" > .go-version
```

##### 环境变量配置

```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
export PATH="$HOME/.go/bin:$PATH"
export PATH="$HOME/.go/current/bin:$PATH"
export GOROOT="$HOME/.go/current/"
export GOPATH="$HOME/.go/GOPATH/"

# 国内用户设置 Go 代理
export GOPROXY=https://goproxy.cn,direct
```

##### 🔸 卸载 goup

```bash
# 删除 goup 目录
rm -rf ~/.go

# 从 shell 配置中移除相关行
# 编辑 ~/.bashrc, ~/.zshrc, ~/.config/fish/config.fish
# 删除类似以下的行:
# export PATH="$HOME/.go/bin:$PATH"
# export PATH="$HOME/.go/current/bin:$PATH"
# export GOROOT="$HOME/.go/current/"
# export GOPATH="$HOME/.go/GOPATH/"

# 重新加载 shell 配置
source ~/.bashrc  # Bash
# 或
source ~/.zshrc   # Zsh
```

---

## 🔴 专业开发者 - 企业部署

### Docker 容器化部署

```dockerfile
# Dockerfile
FROM golang:1.26.0 AS builder
WORKDIR /app
COPY . .
RUN go build -o app

FROM alpine:latest
COPY --from=builder /app/app /usr/local/bin/app
CMD ["app"]
```

### CI/CD 集成

**GitHub Actions 示例**：
```yaml
name: Go Build
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: ['1.25', '1.26']
    steps:
      - name: Install goup
        run: curl -sSf https://raw.githubusercontent.com/owenthereal/goup/master/install.sh | sh

      - name: Install Go
        run: |
          source $HOME/.go/env
          goup install ${{ matrix.go-version }}
          goup use ${{ matrix.go-version }}

      - uses: actions/checkout@v3
      - run: go test ./...
      - run: go build -v ./...
```

---

## 🔧 环境变量配置

### 基本配置（所有用户必需）

```bash
# Linux/macOS - 添加到 ~/.bashrc 或 ~/.zshrc
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$HOME/go/bin

# Windows PowerShell
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\Go\bin", "User")
```

### 中国用户网络加速

```bash
# 设置国内 Go 代理（选择其一）
go env -w GOPROXY=https://goproxy.cn,direct
# 或
go env -w GOPROXY=https://goproxy.io,direct
```

**国内 Go 代理服务**：
- [https://goproxy.cn](https://goproxy.cn) - 七牛云提供的 Go 模块代理
- [https://goproxy.io](https://goproxy.io) - 全球知名的 Go 模块代理

两者皆为稳定可靠的选择，可任选其一使用。

---

## ✅ 安装验证

### 基础验证

```bash
# 检查版本
go version

# 查看环境变量
go env

# 检查关键路径
which go
go env GOROOT
go env GOPATH
```

### 完整验证脚本

```bash
#!/bin/bash
echo "=== Go 安装验证 ==="
echo "Go 版本: $(go version)"
echo "GOROOT: $(go env GOROOT)"
echo "GOPATH: $(go env GOPATH)"
echo "=== 编译测试 ==="
cd /tmp
echo 'package main; import "fmt"; func main() { fmt.Println("Hello, Go!") }' > hello.go
go run hello.go
rm hello.go
```

---

## 🛠️ 开发工具推荐

### VSCode（免费，推荐新手）

1. 安装 [VSCode](https://code.visualstudio.com/)
2. 安装 Go 扩展（搜索 "Go"）
3. 打开 `.go` 文件时，点击 "Install All" 安装工具

### GoLand（付费，功能强大）

1. 下载 [GoLand](https://www.jetbrains.com/go/)
2. 配置 Go SDK 路径
3. 开始开发

### Vim/Neovim

```bash
# 使用 LazyVim（推荐）
git clone https://github.com/LazyVim/starter ~/.config/nvim
# 自动支持 Go
```

---

## ❓ 常见问题

### Q: 安装后提示 "command not found: go"
**A**: PATH 环境变量未正确配置，请检查上述配置步骤。

### Q: 多个 Go 版本冲突
**A**: 使用 **goup** 版本管理工具统一管理多版本。goup 支持 Windows、macOS 和 Linux，提供一致的跨平台体验。

### Q: goup 和其他版本管理工具的区别
**A**:

| 特性 | goup | gvm | g |
|------|------|-----|---|
| **跨平台支持** | ✅ Windows/macOS/Linux | ❌ Unix/macOS only | ❌ Unix/macOS only |
| **安装难度** | ⭐ 一行命令 | ⭐⭐⭐⭐ 需要依赖 | ⭐ 一行命令 |
| **预装 Go** | ❌ 不需要 | ✅ 需要 | ❌ 不需要 |
| **国内镜像** | ✅ 支持 | ❌ 不支持 | ❌ 不支持 |

### Q: 中国用户下载慢
**A**:
- 使用国内镜像下载：https://golang.google.cn/dl/
- 设置 Go 代理（选择其一）：
  ```bash
  go env -w GOPROXY=https://goproxy.cn,direct
  # 或
  go env -w GOPROXY=https://goproxy.io,direct
  ```

### Q: 如何卸载 Go
**A**: 每种安装方式都有对应的卸载方法，请查看对应平台的"卸载方法"章节。

---

## 📚 下一步

安装完成后，继续学习：
→ [编写你的第一个 Go 程序](/golang/hello)

## 🔗 参考资源

- [Go 官方下载页](https://go.dev/dl/)
- [Go 中国镜像](https://golang.google.cn/dl/)
- [Go 官方文档](https://go.dev/doc/)
- [goup GitHub](https://github.com/owenthereal/goup)
