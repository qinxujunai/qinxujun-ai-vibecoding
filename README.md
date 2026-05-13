# ai.vibecoding

> 用自然语言，构建确定性的应用世界。
>
> The art of Vibe Coding.

[线上站点](https://qinxujun-ai-vibecoding.netlify.app) · [GitHub 仓库](https://github.com/qinxujunai/qinxujun-ai-vibecoding)

## 项目定位

`ai.vibecoding` 是秦徐俊关于自然语言编程、AI Agent 工作流、上下文工程与确定性交付的产品指南站。

它不是工具列表，也不是提示词堆砌，而是一条完整的工程叙事：

1. 先理解第一性原理：自然语言只有被边界、上下文和验收标准约束后，才会变成可靠产物。
2. 先配置底层环境：Node.js、Git、终端是所有 AI 编程代理的运行底座。
3. 再选择工具矩阵：Codex、Claude Code、v0 各自负责不同阶段的工程能力。
4. 再建立上下文引擎：AGENTS.md、Skills、MCP、子代理与钩子让模型拥有可复用的工作记忆。
5. 最后进入工作流与指令库：访谈、装载、计划、执行、验证、提交和部署。

## 技术栈

- React 19
- TypeScript
- Vite 6
- Tailwind CSS v4
- motion/react
- lucide-react
- Netlify 静态部署

## 本地启动

Windows 推荐直接双击根目录的 `start.bat`。脚本会进入项目目录、安装依赖、启动 Vite 服务，并打开浏览器访问：

```text
http://localhost:3000
```

也可以手动执行：

```bash
npm install
npm run dev
```

macOS / Linux 可运行：

```bash
sh start.sh
```

## 构建验证

每次交付前必须运行：

```bash
npm run build
```

构建产物输出到 `dist/`。`dist/`、`node_modules/`、`.netlify/`、`.env*` 等本地生成或敏感文件不会提交。

## 页面结构

```text
Hero
Concept
Environment
Tools
ContextEngine
Workflow
Prompts
Deployment
Manifesto
Footer
```

这个顺序刻意把“前置环境”放在“工具矩阵”之前：用户先知道底层环境为什么重要，再下载和使用 Codex、Claude Code、v0 等工具，路径更符合真实上手流程。

## 核心资产

- `src/components/sections/Hero.tsx`：首页 Claude Code 终端模拟首屏。
- `src/components/sections/Environment.tsx`：Node.js、Git、Terminal 前置环境。
- `src/components/sections/Tools.tsx`：Codex、Claude Code、v0 工具矩阵。
- `src/components/sections/Workflow.tsx`：六段防御性交付管线。
- `src/components/sections/Prompts.tsx`：四步 Prompt Playbook。
- `src/components/layout/Footer.tsx`：联系秦徐俊的二维码弹窗。
- `src/assets/icons/`：本地化品牌图标资产。
- `public/favicon.svg`：浏览器标签页品牌图标。

## AI Agent 协作规则

本项目以 `AGENTS.md` 作为跨 Agent 的共享宪章。Claude Code 通过 `CLAUDE.md` 导入 `AGENTS.md`，避免同一套规则在多个文件里重复维护。

关键原则：

- 修改前先读项目结构、README、AGENTS.md、package.json、启动脚本和相关组件。
- 不做无关重构，不破坏既有 UI 动效。
- 所有品牌图标优先使用本地化官方或准官方资产，不热链随机图片。
- 所有交付必须跑通 `npm run build`。
- 涉及真实页面体验时，用浏览器验证桌面和移动端关键路径。

## 部署

当前生产站点部署在 Netlify：

```text
https://qinxujun-ai-vibecoding.netlify.app
```

配置见 `netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

生产部署命令：

```bash
npx netlify deploy --prod --build
```

## 维护者

Designed & Engineered by Qin Xujun.
