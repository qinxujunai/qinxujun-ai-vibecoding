# ai.vibecoding

> 用自然语言，创造可运行的作品。
>
> The art of Vibe Coding.

[线上站点](https://qinxujun-ai-vibecoding.netlify.app) | [GitHub 仓库](https://github.com/qinxujunai/qinxujun-ai-vibecoding)

## 项目定位

`ai.vibecoding` 是一个静态展示站，用来讲清楚自然语言编程、AI Agent 工作流、上下文工程与确定性交付之间的关系。

它不是工具罗列页，也不是 Prompt 资料堆。核心命题：代码正在变得廉价，稀缺的是定义问题、组织上下文、验证结果的能力。页面用 10 章把读者从“Vibe Coding”带到“Agentic Engineering”，分三幕由浅入深：

- **认知**：01 范式跃迁（时间线 + 过去/现在对照）、02 第一性原理（交付质量 = 问题 × 上下文 × 验证）、03 模式光谱（出错代价 × 验证速度四象限）。
- **装备**：04 前置基建（按系统切换的安装命令 + 第一个小时）、05 生态矩阵（三款代表工具 + 四种协作形态）、06 上下文外脑（上下文预算、AGENTS.md / Skills / MCP / Subagents / Hooks / Compaction、致命三要素）。
- **实战**：07 交付管线（Spec → Plan → Build → Verify → Review → Ship，附五个来源的交叉验证矩阵）、08 失败模式（与 Anthropic 官方失败模式对齐）、09 升维问题、10 指令库（00 宪章 + 01–06，共七段可复制指令，每段标注交叉验证来源）。

首屏下方依次是“四个改变判断的事实”和“选择你的起点”路线器（零基础 / 产品·创业者 / 工程师三条路线，并推荐 Datawhale easy-vibe 课程做系统学习）；页尾“精选必读”按组列出交叉验证过的一手资料，每条写明为什么值得读、印证本页哪一章。`public/llms.txt` 为 AI Agent 提供站点导航。站点包含中英文切换、日夜模式、移动端章节目录、阅读进度条、可复制命令与指令、二维码联系弹窗。所有页面文案统一维护在 `src/content/site.tsx`，避免界面、文档和提示词各写一份导致漂移。

章节顺序以 `src/content/site.tsx` 的 `sectionOrder` 为准，桌面导航显示 `primaryNav`。中英文导航、章节 eyebrow 编号和文档说明必须一起维护。

## 技术栈

- React 19
- TypeScript
- Vite 6
- Tailwind CSS v4
- motion/react
- lucide-react
- Inter 可变字体本地打包（@fontsource-variable/inter），中文回退到各平台系统字体
- Netlify 静态部署 + GitHub Pages 镜像（GitHub Actions 自动发布）

## 本地启动

Windows 推荐直接双击根目录的 `start.bat`。

macOS / Linux：

```bash
sh start.sh
```

也可以手动执行：

```bash
npm install
npm run dev
```

默认地址：

```text
http://localhost:3000
```

## 构建验证

每次交付前运行：

```bash
npm run lint
npm run build
```

构建产物输出到 `dist/`。`dist/`、`node_modules/`、`.netlify/` 和本地日志文件不提交。

涉及页面体验时，还必须打开真实浏览器截图验证。至少检查当前问题位置、桌面宽度、必要时移动端宽度、控制台错误、主题切换和语言切换。

## 页面结构

```text
Hero (+ HeroTerminal)
Signals          四个改变判断的事实
Paths            选择你的起点（三条阅读路线）
Shift            01 范式跃迁
Concept          02 第一性原理
Spectrum         03 模式光谱
Environment      04 前置基建
Tools            05 生态矩阵
ContextEngine    06 上下文外脑
Workflow         07 交付管线
Failures         08 失败模式
Questions        09 升维问题
Prompts          10 指令库
Manifesto        写在最后
Reading          精选必读
Footer
```

核心文件：

- `src/content/site.tsx`：全站中英文内容、章节顺序、安装命令、外链、交叉验证矩阵、精选必读、提示词正文和页脚文案。
- `src/context/SiteSettings.tsx`：语言、主题、`html lang`、SEO meta 和本地偏好。
- `src/index.css`：Tailwind v4 入口和主题变量。
- `src/components/sections/Hero.tsx` / `HeroTerminal.tsx`：首页文案与 Claude Code v2 终端模拟。
- `src/components/ui/Section.tsx`：统一的章节标题与一次性入场动效。
- `src/components/layout/Navbar.tsx`：品牌回顶部、章节高亮、移动端章节目录、阅读进度条、语言与日夜模式切换。
- `src/components/layout/Footer.tsx`：联系入口、二维码弹窗（手机端为底部面板，可保存二维码）和页脚收尾。

## 协作约束

- `AGENTS.md` 是项目协作规则的单一事实源。
- `CLAUDE.md` 只负责把 Claude Code 指向 `AGENTS.md`，不再维护重复规则。
- 这个仓库当前是纯静态前端站点，不依赖后端服务、Express、Gemini SDK 或运行时环境变量。
- 如果要改文案、提示词或双语内容，优先改 `src/content/site.tsx`，再同步 `PROMPTS.md` 中的说明。
- 如果要改主题，优先改 `src/index.css` 的 CSS variables，不要把颜色散落到组件里。
- 任何交付都必须至少经过一次 `npm run lint`、`npm run build` 和真实浏览器验证。
- 任何新增功能、页面文案、导航、部署路径、启动方式或协作流程变更后，都要同步相关文档，不能等用户提醒。

## 编码约定

- 仓库文本文件统一使用 UTF-8。
- Windows PowerShell 默认编码可能把中文误显示成乱码；遇到这种情况，优先用 `Get-Content -Encoding utf8` 复核，不要直接把显示异常当成文件已损坏。
- `.editorconfig` 和 `.gitattributes` 已提供默认编码与换行护栏，后续修改请继续遵循。

## 部署

生产环境部署在 Netlify：

```text
https://qinxujun-ai-vibecoding.netlify.app
```

GitHub Pages 镜像：

```text
https://qinxujunai.github.io/qinxujun-ai-vibecoding/
```

构建配置见 `netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

手动部署命令：

```bash
npx netlify deploy --prod --build
```

GitHub Pages 由 `.github/workflows/deploy.yml` 自动发布：每次推送 `main`，Actions 会运行 `npm run lint`、带 `BASE_PATH` 构建，并把 `dist/` 发布到 `gh-pages` 分支。
