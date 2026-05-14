# ai.vibecoding

> 用自然语言，构建确定性的应用世界。
>
> The art of Vibe Coding.

[线上站点](https://qinxujun-ai-vibecoding.netlify.app) | [GitHub 仓库](https://github.com/qinxujunai/qinxujun-ai-vibecoding)

## 项目定位

`ai.vibecoding` 是一个静态展示站，用来讲清楚自然语言编程、AI Agent 工作流、上下文工程与确定性交付之间的关系。

它不是工具罗列页，也不是 Prompt 资料堆。它的目标是用一条完整的叙事路径，把“先理解、再约束、后实现、最后验证”的工程观讲清楚。

## 技术栈

- React 19
- TypeScript
- Vite 6
- Tailwind CSS v4
- motion/react
- lucide-react
- Netlify 静态部署

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
npm run build
```

构建产物输出到 `dist/`。`dist/`、`node_modules/`、`.netlify/` 和本地日志文件不提交。

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

## 协作约束

- `AGENTS.md` 是项目协作规则的单一事实源。
- `CLAUDE.md` 只负责把 Claude Code 指向 `AGENTS.md`，不再维护重复规则。
- 这个仓库当前是纯静态前端站点，不依赖后端服务、Express、Gemini SDK 或运行时环境变量。
- 任何交付都必须至少经过一次 `npm run build`。

## 编码约定

- 仓库文本文件统一使用 UTF-8。
- Windows PowerShell 默认编码可能把中文误显示成乱码；遇到这种情况，优先用 `Get-Content -Encoding utf8` 复核，不要直接把显示异常当成文件已损坏。
- `.editorconfig` 和 `.gitattributes` 已提供默认编码与换行护栏，后续修改请继续遵循。

## 部署

生产环境部署在 Netlify：

```text
https://qinxujun-ai-vibecoding.netlify.app
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
