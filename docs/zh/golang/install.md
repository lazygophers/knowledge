# Go 语言安装指南

本指南将帮助你在各种操作系统上安装 Go 语言。请根据你的情况选择合适的安装方式。

## 🖥️ 快速选择你的平台

| 操作系统 | 图形化安装 | 命令行安装 | 包管理器 | 便携版 |
|---------|-----------|-----------|---------|--------|
| **Windows** | ✅ MSI 安装包 | ✅ | Chocolatey / Scoop | ✅ ZIP |
| **macOS** | ✅ PKG 安装包 | ✅ | Homebrew | - |
| **Linux** | - | ✅ tar.gz | apt / yum / dnf / Snap | ✅ |

> 💡 **提示**：如果你是第一次安装，推荐使用图形化安装或包管理器方式。

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

---

### 🟡 中级开发者 - 多版本管理

**适合人群**：需要在不同项目间切换 Go 版本

#### 方案：使用 g 工具

```bash
# 1. 安装 g
curl -sSL https://git.io/g-install | sh
source ~/.g/env

# 2. 安装多个版本
g install 1.26.0
g install 1.25.5

# 3. 切换版本
g use 1.26.0

# 4. 查看当前版本
g current
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

---

### 🟢 Snap 安装（通用）

```bash
# 安装 Go
sudo snap install go --classic

# 验证
go version
```

---

### 🟡 中级开发者 - 多版本管理（gvm）

```bash
# 1. 安装依赖
sudo apt-get install bison git

# 2. 安装 gvm
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)

# 3. 配置 shell
source ~/.gvm/scripts/gvm
echo '[[ -s "$HOME/.gvm/scripts/gvm" ]] && source "$HOME/.gvm/scripts/gvm"' >> ~/.bashrc

# 4. 安装版本
gvm install go1.26.0
gvm use go1.26.0 --default
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
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-go@v4
        with:
          go-version: '1.26.0'
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
# 设置国内镜像
go env -w GOPROXY=https://goproxy.cn,direct
```

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
**A**: 使用版本管理工具（g 或 gvm）管理多版本。

### Q: 中国用户下载慢
**A**: 使用国内镜像下载：https://golang.google.cn/dl/

### Q: 如何卸载 Go
**A**:
- Windows：控制面板 → 卸载程序
- macOS：删除 `/usr/local/go`
- Linux：`sudo rm -rf /usr/local/go`

---

## 📚 下一步

安装完成后，继续学习：
→ [编写你的第一个 Go 程序](/golang/hello)

## 🔗 参考资源

- [Go 官方下载页](https://go.dev/dl/)
- [Go 中国镜像](https://golang.google.cn/dl/)
- [Go 官方文档](https://go.dev/doc/)
