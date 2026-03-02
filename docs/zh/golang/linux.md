# Linux 平台 - Go 语言安装指南

本指南提供在 Linux 系统上安装 Go 语言的多种方法。请根据你的发行版和需求选择合适的安装方式。

[← 返回安装指南](/golang/install)

---

## 🔵 初级开发者 - 官方二进制包（推荐）

**适合人群**：大多数 Linux 用户

### 安装步骤

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

### 无 sudo 权限安装

```bash
# 解压到用户目录
mkdir -p ~/tools
tar -C ~/tools -xzf go1.26.0.linux-amd64.tar.gz

# 配置 PATH
echo 'export PATH=$PATH:$HOME/tools/go/bin' >> ~/.bashrc
source ~/.bashrc
```

### 🔸 卸载方法

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

## 🟢 Ubuntu/Debian - 包管理器安装

**适合人群**：Ubuntu、Debian 及其衍生发行版用户

### 安装方法

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

### 🔸 卸载方法

```bash
# apt 安装的卸载
sudo apt remove golang-go

# PPA 安装的卸载
sudo apt remove golang-go
sudo add-apt-repository --remove ppa:longsleep/golang-backports
sudo apt update
```

---

## 🟢 CentOS/RHEL/Fedora - 包管理器安装

**适合人群**：RedHat 系发行版用户

### 安装方法

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

### 🔸 卸载方法

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

## 🟢 Snap 安装（通用）

**适合人群**：支持 Snap 的所有发行版

### 安装方法

```bash
# 安装 Go
sudo snap install go --classic

# 验证
go version
```

### 🔸 卸载方法

```bash
# 卸载 Go
sudo snap remove go
```

---

## 🟡 中级开发者 - 多版本管理

**适合人群**：需要在不同项目间切换 Go 版本

> 💡 **推荐使用 goup**：goup 是跨平台的 Go 版本管理工具，与 macOS 和 Windows 使用相同的工具和命令，提供一致的使用体验。

### 方案：使用 goup（跨平台）

**优势**：
- ✅ 真正的跨平台支持（Windows/macOS/Linux）
- ✅ 一行命令安装，无需预装 Go
- ✅ 支持项目级版本锁定（`.go-version` 文件）

#### 安装 goup

```bash
# 一键安装（所有平台通用）
curl -sSf https://raw.githubusercontent.com/owenthereal/goup/master/install.sh | sh

# 加载环境变量
source ~/.go/env

# 验证安装
goup version
```

#### 基本使用

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

#### 项目级版本锁定

```bash
# 在项目根目录创建 .go-version 文件
echo "1.26.0" > .go-version
```

#### 环境变量配置

```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
export PATH="$HOME/.go/bin:$PATH"
export PATH="$HOME/.go/current/bin:$PATH"
export GOROOT="$HOME/.go/current/"
export GOPATH="$HOME/.go/GOPATH/"

# 国内用户设置 Go 代理
export GOPROXY=https://goproxy.cn,direct
```

#### 🔸 卸载 goup

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

## 🔧 Linux 环境变量配置

### 基本配置

```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$HOME/go/bin
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

---

## ❓ Linux 常见问题

### Q: 安装后提示 "command not found: go"
**A**: PATH 环境变量未正确配置，请检查上述配置步骤。

### Q: 多个 Go 版本冲突
**A**: 使用 **goup** 版本管理工具统一管理多版本。goup 支持 Windows、macOS 和 Linux，提供一致的跨平台体验。

### Q: 包管理器安装的版本较旧
**A**: 使用官方二进制包安装，或使用 PPA（Ubuntu/Debian）。

### Q: 权限不足
**A**: 使用 sudo 执行需要 root 权限的命令，或使用用户目录安装。

### Q: SELinux 阻止 Go 运行
**A**: 配置 SELinux 策略或临时设置为 Permissive 模式。

---

## 📊 发行版支持矩阵

| 发行版 | 官方二进制 | apt | yum/dnf | pacman | zypper | snap |
|--------|-----------|-----|---------|--------|--------|------|
| Ubuntu | ✅ | ✅ | - | - | - | ✅ |
| Debian | ✅ | ✅ | - | - | - | ✅ |
| CentOS | ✅ | - | ✅ | - | - | ✅ |
| RHEL | ✅ | - | ✅ | - | - | ✅ |
| Fedora | ✅ | - | ✅ | - | - | ✅ |
| Arch | ✅ | - | - | ✅ | - | ✅ |
| openSUSE | ✅ | - | - | - | ✅ | ✅ |

---

[← 返回安装指南](/golang/install) | [继续：Hello World →](/golang/hello)
