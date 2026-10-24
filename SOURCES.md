# 出处清单

页面上的事实性判断都出自这里。2026-10-24 起不再放在页面上（作者要求「写在最后」之后只留联系方式），但改动页面事实时仍要能在这里找到一手出处。

## 先读这三篇

- [Claude Code Best Practices](https://code.claude.com/docs/en/best-practices)（Anthropic 官方文档）：官方工作流的完整版：验证优先、先探索再计划、访谈写规格、新会话审查。本页交付管线的主干。
- [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)（Anthropic Engineering）：把“上下文是有限预算”讲透：最少的高信号 token、即时检索、压缩与子代理。
- [My LLM codegen workflow atm](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)（Harper Reed）：从想法到规格再到计划的经典长文，“一次只问一个问题”的出处。最容易上手的一套方法。

## 工作流与方法

- [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)（Anthropic Engineering）：先用最简单的模式，只在必要时增加复杂度。分清 workflow 与 agent 的边界。
- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)（Anthropic Engineering）：长任务不跑偏的做法：功能清单、进度文件、一次一个功能、像真实用户一样端到端测试。
- [My LLM coding workflow going into 2026](https://addyosmani.com/blog/ai-coding-workflow/)（Addy Osmani）：Google 工程负责人的一线实践：规格先行、小块推进、频繁提交、人始终在环。
- [AGENTS.md 指南](https://developers.openai.com/codex/guides/agents-md)（OpenAI Codex 文档）：AGENTS.md 放在哪、怎么分层覆盖、写什么。配合指令 00 使用。

## 开源工作流框架

- [obra/superpowers](https://github.com/obra/superpowers)（GitHub · 星标 30 万+）：把头脑风暴、写计划、TDD、代码审查做成 Agent 必须遵守的 Skills，装上即用。
- [github/spec-kit](https://github.com/github/spec-kit)（GitHub 官方 · 星标 14 万+）：规格驱动开发工具链：constitution → specify → plan → tasks → implement。
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)（GitHub · Addy Osmani）：/spec、/plan、/build、/test、/review、/ship 一套命令，兼容 Claude Code、Cursor、Gemini CLI。
- [easy-vibe](https://datawhalechina.github.io/easy-vibe/)（Datawhale · 中文开源课程）：从找到好问题讲到全栈上线与 Claude Code 进阶，适合系统学习。

## 研究、基准与安全

- [Measuring AI ability to complete long tasks](https://metr.org/time-horizons/)（METR）：AI 能独立完成的任务时长如何增长。判断“能委派多大任务”的最好标尺。
- [AI 对资深开发者效率的随机对照实验](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)（METR · 2025 及 2026 复测）：感觉快 20%，实测慢 19%；一年后复测转向提速。教你用数据而不是体感衡量效率。
- [SWE-bench](https://www.swebench.com)（普林斯顿等 · 编码基准）：用真实 GitHub issue 衡量模型修复代码的能力，选编码模型时最常被引用的榜单。
- [Terminal-Bench](https://www.tbench.ai)（编码 Agent 基准）：衡量 Agent 在真实终端里完成任务的能力，比单纯写代码更接近 Claude Code 的工作方式。
- [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)（Simon Willison）：私有数据、不可信内容、对外通信同时存在，就会泄露数据。接 MCP 之前必读。
- [Vibe coding 与 agentic engineering](https://x.com/karpathy/status/1886192184808149383)（Andrej Karpathy）：两个名词的出处与演变：前者降低地板，后者抬高天花板。

## 开放标准

- [AGENTS.md](https://agents.md)
- [Agent Skills](https://agentskills.io)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Linux Foundation AAIF](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)
