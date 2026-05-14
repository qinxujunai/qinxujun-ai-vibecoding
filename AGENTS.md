# 全局 AI Assistant 守则与核心防腐层 (Agent Rules & Documentation)

> **自然语言是不确定的，但我们生成的代码必须是绝对确定的。** 
> —— 这是你通过这份手册所背负的核心命题。

当任何 AI Agent (Cursor, Windsurf, GitHub Copilot 等) 接管或修改此项目时，都**必须严格遵循本指南**。这是项目核心代码防腐层（Anticorruption Layer）的最后一道防线，确保“Vibe Coding（自然语言驱动工程）”的高纯度美学与最佳实践。

---

## 0. 当前项目事实 (Current Project Truth)

- 这是一个纯静态 Vite + React + TypeScript + Tailwind CSS v4 展示站，生产站点部署在 Netlify，GitHub Pages 作为镜像。
- 页面内容、双语文案、工具卡片、提示词正文和页脚文案统一维护在 `src/content/site.tsx`。
- 语言与主题偏好由 `src/context/SiteSettings.tsx` 管理，并同步 `html lang`、页面标题、description、OG description 与 `color-scheme`。
- 主题色板集中在 `src/index.css` 的 CSS variables。修改日夜模式时，优先改变量，不要把临时颜色散落进组件。
- 顶部导航文案必须与目标 section 的信息架构一致：第一性原理、前置基建、生态矩阵、交付管线、指令库。新增或改名 section 时，同步 `src/content/site.tsx` 的中英文导航与对应文档。
- `README.md` 面向人类维护者，`AGENTS.md` 面向接管项目的 Agent，`CLAUDE.md` 只保留指向本文件的轻量入口，`PROMPTS.md` 记录指令库结构与来源。
- 本仓库不依赖后端服务、数据库、Express、Gemini SDK 或运行时环境变量。

## 1. 核心哲学与上下文外脑 (Philosophy & Context Engine)

这是 AI 主导软件世界的核心第一性原理：

- **为何定规？**：你不是在堆砌代码，你是在构筑高信噪比的上下文结构。这篇文档即是约束你的“超级编译器”。你的每一次 Commit 都必须朝着收敛熵值的方向演进。
- **架构“外脑” (Context Engine)**：我们特辟了关于 `外脑与上下文引擎` 的前沿架构（如 MCP 协议对接私域数据、系统级 Skills/Rules 硬编码防御、以及 OpenHands 沙盒测试环境）。这些才是真正解锁全自动、无人值守式软件工程的枢纽。

---

## 2. 严苛工程基线 (Engineering Baseline)

- **物理容器**: Node.js, Web Browser.
- **编译层栈**: React 19, Vite 6, TypeScript。拒绝使用未定义或 `any` 妥协。
- **样式引擎界限**: Tailwind CSS v4 —— **红线禁止**引入 Bootstrap、MUI 或 AntD。**红线禁止**使用 CSS-in-JS (如 Styled-Components) 导致渲染管线阻塞。
- **动效基建**: 只允许使用 `motion/react`。所有转场必须是平滑的、克制的 (`ease: [0.16, 1, 0.3, 1]`)，断绝使用弹簧、高频脉冲或低俗特效。

---

## 3. 设计级：纯代码 Mockup 占位优先法则 (Image Replacement Policy)

此项目作为极致工程能力的展示级教程，全盘**封杀无授权的真实图片库**（例如自动生成的 Unsplash 占位图）。
我们的应用包含了用纯代码雕刻的极客模型图表。

### 3.1 资产点位透视地图 (Mockup Radar Index)
如果你接收到人类修改界面的具体点位需求，核查并对冲以下锚点：
1. **`src/components/sections/Hero.tsx` (主轴头图区)**
   - **形态**: 一个含有 Mac 三色窗体控制按钮的深色 Claude Code 终端模拟。外层尺寸、圆角和首屏节奏是页面的视觉锚点。
   - **底线**: 可以优化内部内容、边界、阴影、标题栏和命令文本，但不要改变外层卡片尺寸、首屏位置和整体布局比例。
2. **`src/components/sections/Workflow.tsx` (工作流程网格)**
   - **形态**: 一幅利用 Tailwind 原生网格 (Grid)、边框和绝对定位 (Absolute Positioning) 巧妙渲染出的防守型开发逻辑流水线骨架图。
   - **底线**: 处理它如同拆弹，只能增加连线/修改文字，不要改变其结构体系。
3. **`src/components/sections/Tools.tsx` (开发矩阵)**
   - **形态**: 包裹在精美卡片内，优先采用 `<svg>` 原生标签人工精绘，或使用统一管理的本地化静态资产（统归于 `src/assets/icons` 闭环管理）。
   - **底线**: 处理包含工具图谱的界面时，严禁使用外部随机网络图源，必须内聚化管理，维持圆角与盒子阴影的一致性。

### 3.2 高清资产注流替换 (Smooth Swap Override)
尽管上述皆为纯代码，但我们同样将其视为**高保真的视觉占位结构体 (Structural Placeholders)**。
未来如果秦徐俊（或任何其他接管该项目的人类系统主管）提供了明确要求使用的、官方授权的高清设计资产 (png, jpg, webp 等)：
- **实施准则**: 借助你优秀的视觉阅读力，将以上精细打磨的代码渲染块识别出来，平滑地以标准的 `<img src="xxx" />` 节点置换。且在置换过程中控制其长宽比及包裹盒模型级，严禁父节点缩放崩溃以及视觉张力的流失。

---

## 4. 文案修饰与品牌对齐 (Tone of Voice)

- 请你站在“**世界上最顶尖的前案架构师兼 AI Agent 布道者**”的视角来撰写每一个提示句落匣。
- **消灭塑料感**：摒弃类似于“毫无疑问”、“不可否认”、“让我们来探讨”等啰嗦低效的人机交互腔体。文本必须直白硬朗，斩钉截铁。
- **锚定词表**：尽可能融合并强化如：`系统推演`、`防偏离`、`确定性边界`、`第一性原理`、`模型认知` 与 `纯粹解法`。

---

## 5. 页面验证与文档同步 (Browser QA & Docs Sync)

- 任何涉及页面、交互、响应式、动效、主题、语言、文案或视觉结构的需求，都必须打开真实浏览器验证。不要只靠代码推断。
- 浏览器验证必须至少包含：当前问题所在位置的截图或可见页面证据、桌面宽度检查、必要时移动端宽度检查、控制台错误检查。
- 如果用户给出截图或浏览器注释，先用真实页面复现和定位，再改代码。不要凭想象重做视觉。
- 动效遵守 Apple HIG 的克制原则：动效只用于帮助用户理解层级、反馈和过渡，不为了“炫”而加；已有 `motion/react` 入场动画保持轻量、一次性、低干扰。
- 任何新增功能、文案、导航、部署路径、启动方式、主题规则或协作流程变更后，必须同步相关文档。默认检查 `README.md`、`AGENTS.md`、`PROMPTS.md`、`DEPLOYMENT.md` 是否需要更新。
- 交付前必须清理明显漂移：未使用的旧常量、重复文案源、过期说明、已经废弃的按钮名或部署信息。

---

## 6. 持续交付宪章 (Build Constraint)
- 无构建、不交付：你在实施完一组修改原子闭环后，必须立即静默跑通一次 `npm run build`。
- 如果构建期间 TS 或 Tailwind 跑出 Error，你有必须立即进行 Self-Fixing（自我纠错排查）的义务。绝不可将未跑过测试、带着刺眼的红色的残废品交付给下一位维护者。

## 7. Git 与发布边界 (Git & Release)

- 提交前必须检查 `git status --short`，确认没有 `node_modules/`、`dist/`、`.netlify/`、日志文件或本地密钥进入提交。
- 正常发布顺序：`npm run lint` -> `npm run build` -> 浏览器验证 -> `git add` -> `git commit` -> `git push` -> Netlify production deploy -> GitHub Pages 镜像更新。
- 线上发布后验证 Netlify 与 GitHub Pages 两个地址的 HTTP 状态和关键资源路径。GitHub 仓库 description、homepage、topics 如与项目定位不一致，也要同步更新。
- 禁止使用批量删除命令。需要删除文件时，只能一次删除一个明确路径的文件。
