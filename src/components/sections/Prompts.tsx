import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, GitPullRequest, Layers3, MessageSquareText, Rocket } from 'lucide-react';

const promptPlaybook = [
  {
    id: '01',
    title: '访谈对话',
    badge: 'Interview',
    icon: MessageSquareText,
    desc: '先把模糊想法采访成 AGENTS.md 草案，让后续 Agent 有同一份项目宪章。',
    content: `先不要写代码。你现在是我的产品访谈官、工程架构师和交付守门人。

目标：通过对话把我的模糊想法整理成一份可写入 AGENTS.md 的项目宪章草案，让后续所有 Agent 都能沿用同一套目标、边界和验收标准。

工作方式：
1. 先问问题，不给方案；每轮最多问 3 个最影响范围的问题。
2. 优先澄清用户、场景、成功标准、非目标、风险边界和上线验收。
3. 如果我给的信息自相矛盾，直接指出冲突并给出推荐取舍。
4. 不要实现，不要建文件，不要改代码。

采访完成后输出：
## AGENTS.md 草案
### 项目目标
### 目标用户与使用场景
### 核心功能边界
### 明确不做
### 设计与交互原则
### 技术约束
### 验收标准
### 风险与待确认问题

等我确认这份草案后，才允许进入上下文读取或实现阶段。`,
  },
  {
    id: '02',
    title: '装载上下文',
    badge: 'Context',
    icon: Layers3,
    desc: '读取 README、AGENTS.md、启动脚本和相关源码，把事实、规则和风险装进上下文。',
    content: `先完整理解当前项目，不要急着改代码。

请读取：
1. README.md、AGENTS.md、CLAUDE.md（如果存在）、package.json。
2. start.bat / start.sh、vite.config.ts、构建与部署配置。
3. 与本次任务直接相关的组件、样式、资产、路由顺序和交互逻辑。
4. 最近的 git 状态与可能影响本次修改的未提交变化。

输出一份 Context Map：
## 项目事实
- 项目做什么
- 技术栈与启动方式
- 当前页面/模块结构

## 规则与边界
- AGENTS.md 中必须遵守的约束
- 本次任务的目标与非目标
- 不能破坏的 UI、动效、业务行为

## 风险与验证
- 可能出错的文件或交互
- 需要运行的命令
- 需要浏览器验证的页面与视口

只做读取、归纳和风险判断。没有得到确认前，不要修改文件。`,
  },
  {
    id: '03',
    title: '拆解计划',
    badge: 'Plan',
    icon: GitPullRequest,
    desc: '把修改锁进文件责任、用户可见变化、验收路径和回滚边界，先审后做。',
    content: `基于已确认的 AGENTS.md 草案和 Context Map，输出一份可执行计划，但不要开始实现。

计划必须包含：
1. 目标：这次要让用户看到什么变化。
2. 非目标：哪些事情明确不碰。
3. 文件责任：每个待改文件为什么必须改，负责哪个结果。
4. 交互与视觉守恒：哪些布局、动效、品牌资产、响应式行为必须保留。
5. 风险：最可能破坏的地方，以及预防方式。
6. 验证：build 命令、浏览器路径、移动端宽度、复制/弹窗/跳转等交互检查。
7. 交付：是否需要同步 README / AGENTS.md / 部署文档 / GitHub 描述。

如果发现需求与项目规则冲突，先给出冲突说明和推荐取舍。
计划要具体到另一个工程师可以接手执行。
等我确认后，再开始修改。`,
  },
  {
    id: '04',
    title: '执行与上线',
    badge: 'Ship',
    icon: Rocket,
    desc: '进入实现后，要求小步修改、构建验证、浏览器验收、文档同步、提交推送和部署。',
    content: `请按已确认的计划执行。

执行规则：
1. 先检查 git status，确认工作区里哪些变化属于本次任务。
2. 小步修改，不做无关重构，不覆盖用户未要求修改的内容。
3. 保留既有视觉语言、动效节奏和组件边界；只升级必要部分。
4. 修改后必须运行 npm run build。失败就先修复，再继续。
5. 用浏览器验证关键页面、移动端宽度、点击、复制、弹窗、外链与控制台日志。
6. 如果文案、启动方式、部署方式或协作规则发生变化，同步 README、AGENTS.md 或部署文档。
7. 提交前复查 diff，确认没有 node_modules、dist、.env 或无关文件进入提交。
8. 最后提交、推送并部署线上站点。

交付总结必须包含：
- 发现的问题
- 改了哪些文件
- 验证结果
- Git 提交
- 线上访问链接`,
  },
];

function copyToClipboard(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.top = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(textarea);

  if (copied) {
    return Promise.resolve(true);
  }

  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }

  return Promise.resolve(false);
}

function PromptBody({ content }: { content: string }) {
  return (
    <pre className="max-h-[460px] overflow-auto whitespace-pre-wrap rounded-[1.5rem] bg-[#0B0B0D] p-6 text-left font-mono text-[13px] leading-relaxed text-white/78 shadow-inner selection:bg-electric selection:text-white md:p-8">
      {content}
    </pre>
  );
}

export default function Prompts() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState<number | null>(null);
  const activePrompt = promptPlaybook[active];

  const handleCopy = async (idx: number) => {
    await copyToClipboard(promptPlaybook[idx].content);
    setCopied(idx);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section id="prompts" className="py-24 md:py-32 bg-white border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-semibold text-electric tracking-[0.3em] uppercase mb-4">核心指令库</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-6 leading-[1.15]">
            不要催它写代码。<br />
            先让它进入正确的工作流。
          </h3>
          <p className="text-[16px] text-apple-text-muted leading-relaxed max-w-2xl mx-auto">
            真正有价值的提示词不是一句咒语，而是一套能采访、建模、拆解、验证、提交并部署的工程协议。
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[320px_1fr] gap-8 items-start">
          <div className="space-y-3">
            {promptPlaybook.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`group flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition-all duration-300 ${isActive ? 'border-electric bg-white shadow-[0_16px_45px_rgba(0,102,255,0.10)]' : 'border-gray-100 bg-apple-gray/55 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm'}`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${isActive ? 'bg-electric text-white' : 'bg-white text-apple-text shadow-sm ring-1 ring-gray-900/5 group-hover:text-electric'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] font-semibold text-apple-text-muted">{item.id} · {item.badge}</span>
                    <span className="mt-1 block text-[17px] font-bold tracking-tight text-apple-text">{item.title}</span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-apple-text-muted">{item.desc}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activePrompt.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-gray-100 bg-white p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
          >
            <div className="mb-5 flex items-center justify-between gap-4 px-2">
              <div>
                <div className="font-mono text-[12px] font-semibold text-electric">{activePrompt.id} · {activePrompt.badge}</div>
                <h4 className="mt-1 text-2xl font-bold tracking-tight text-apple-text">{activePrompt.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(active)}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-apple-text px-4 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-md active:translate-y-0"
              >
                {copied === active ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied === active ? '已复制' : '复制指令'}
              </button>
            </div>
            <PromptBody content={activePrompt.content} />
          </motion.div>
        </div>

        <div className="space-y-4 lg:hidden">
          {promptPlaybook.map((item, idx) => {
            const Icon = item.icon;
            const isActive = idx === active;
            return (
              <div key={item.id} className="overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setActive(idx)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${isActive ? 'bg-electric text-white' : 'bg-apple-gray text-apple-text'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] font-semibold text-apple-text-muted">{item.id} · {item.badge}</span>
                    <span className="mt-1 block text-[17px] font-bold text-apple-text">{item.title}</span>
                  </span>
                </button>
                {isActive ? (
                  <div className="border-t border-gray-100 p-4">
                    <p className="mb-4 text-[14px] leading-relaxed text-apple-text-muted">{item.desc}</p>
                    <button
                      type="button"
                      onClick={() => handleCopy(idx)}
                      className="mb-4 inline-flex h-10 items-center gap-2 rounded-full bg-apple-text px-4 text-[13px] font-semibold text-white"
                    >
                      {copied === idx ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied === idx ? '已复制' : '复制指令'}
                    </button>
                    <PromptBody content={item.content} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
