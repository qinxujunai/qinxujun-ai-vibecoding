# ai.vibecoding

> **"自然语言不再是沟通和解释工具，它是编译下一代软件架构体系的最强武器。"** 
> 
> —— Qin Xujun

<div align="center">
  <img src="https://img.shields.io/badge/Paradigm-Vibe%20Coding-0071E3?style=for-the-badge" alt="Vibe Coding Paradigm"/>
  <img src="https://img.shields.io/badge/Stack-React%2018%20%7C%20Tailwind%20v4-black?style=for-the-badge" alt="Tech Stack"/>
  <img src="https://img.shields.io/badge/Architecture-Apple--Grade%20Aesthetics-F5F5F7?style=for-the-badge&logoColor=black&labelColor=black&color=F5F5F7" alt="Apple-Grade Aesthetics"/>
</div>

<br/>

**ai.vibecoding** 是一个专注于探索、实践与布道“自然语言驱动软件工程（Vibe Coding）”的开源级产品指南站。本项目致力于打破通过实体键盘逐行敲击的古典开发流，转向一套高确定性、低折损率、并由第一原理约束的 AI 深度主导工程流水线。

---

## 核心认知与哲学 (Core Philosophy)

1. **强上下文引擎 (Powerful Context Engine)**：脱离系统的物理运行状态并向模型灌输单调 Prompt 是无效的。我们需要通过 MCP (Model Context Protocol)、开源云沙盒及完善的项目配置底座来为模型装上大脑。
2. **防偏离指令基建 (Anticorruption Infrastructure)**：通过确立诸如 `AGENTS.md` 和 `.cursorrules` 的架构强规约配置文件，收敛大语言模型的发散天性，构建企业级的“免疫防线”。
3. **极简美学 (Apple-grade Aesthetics)**：代码的输出不能以粗糙堆满图表为代价，必须遵循海量留白、绝对克制的色调隔离与精确的矢量呈现。不牺牲毫厘的高冷秩序美。

---

## 一键式环境部署 (Zero-Friction Start)

为追求顶级开发者体验，我们内嵌了一键拉起脚手架。在保证本机节点存在 Node.js $\ge$ 20.x 的状态下，无需翻阅文档，通过双击运行系统平台脚本：

- **macOS / Linux 体系**:
  请直接运行根目录的 `start.sh` 或于终端流中输入:
  ```bash
  sh start.sh
  ```

- **Windows 体系**:
  单击双击启动 `start.bat` 激活终端安装并渲染视口。

> 🛈 *脚本会自动对你宿中心的 Node 集群予以探测，静默分析并灌入 NPM 模块集，同时以监听 `0.0.0.0` 全端曝光的方式向浏览器推流渲染。*

---

## 构建基石分布 (Architectural Layout)

项目本身是由极致精简架构与极高代码密度写就的，全屏无依赖繁重图片：

* **核心展区 (`/src/components/sections/`)**
  * `Hero.tsx` —— 含有一帧不差在 WebGL/CSS 级别用代码原样复刻的 *Claude Code CLI Agent 流* 交互窗口。
  * `ContextEngine.tsx` —— 定义系统接管底层硬件、读取数据的神经桥梁集（如 MCP 协议与 OpenHands 框架）。
  * `Tools.tsx` —— 剥去伪信并罗列当前全球最尖端的代码编译引擎入口 (Codex / o1 系列与 Claude)。
  * `Workflow.tsx` —— 一幅借助绝对定位生成的网格式防御型全栈操作链路图。
* **规则防盗门 (`AGENTS.md`)**
  * 对于**人类开发者**：这是你理解项目设计语言边界的核心宪章。
  * 对于接力编程的 **AI 助理引擎**（如 GitHub Copilot, Cursor）：它是强行校正它们编程行为、保证样式无衰变的绝对法典。

---

## 组件图表占位处理协定 (Mockup Replacement Policy)

如果你准备 Fork 并维护你的版本库或要求 AI 客制化本界面，请注意我们刻意移除了笨重的占位图像。

**如何更新内部代码模拟流图：**
1. 请勿动用 `<img />` 去顶用替换已构建的精致前端黑板和流程线代码段，这是粗俗的。这些精良且响应式的代码 UI 能够通过在对应 `tsx` 里搜索固定类名（例如 `TerminalMockup` 的颜色控制 `text-emerald-400`）快速定位。
2. 我们预设这层外壳为占位骨架。当有日你取得了授权或高质量产品实机图想要替换它们时，只要保持包裹在 `div` 定位器或 Aspect-ratio 边界内引入资源，这些结构即可丝滑褪除无感并入标准化的影像显示层，不会引发灾难般的 UI 截断漏轴。

---

<div align="center">
  <p style="color: #666; font-size: 13px; margin-top: 2rem;">
    Designed & Engineered by 秦徐俊 (Qin Xujun)
    <br/>
    Built strictly for those who define the next era.
  </p>
</div>