import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, GitPullRequest, Layers3, MessageSquareText, Rocket } from 'lucide-react';

const promptPlaybook = [
  {
    id: '01',
    title: '访谈对齐',
    badge: 'Interview',
    icon: MessageSquareText,
    desc: '需求还模糊时，先让 Agent 像产品顾问一样采访你，不急着写代码。',
    content: `先不要写代码。你现在的任务是采访我，把模糊想法变成可执行的产品任务。

请按顺序问我这些问题：
1. 这个功能真正要解决谁的什么问题？
2. 用户完成这件事的最短路径是什么？
3. 哪些行为必须包含，哪些行为这次明确不做？
4. 成功上线后，我应该如何判断它是好的？

采访结束后，请输出：
- 目标用户
- 核心目标
- 功能边界
- 不做事项
- 验收标准
- 你认为仍然危险或含糊的地方

在我确认之前，不要进入实现。`,
  },
  {
    id: '02',
    title: '初始化上下文',
    badge: 'Context',
    icon: Layers3,
    desc: '让 Agent 先读项目事实、规则和启动方式，把上下文装进脑子里。',
    content: `先完整理解当前项目，不要急着改代码。

请阅读并总结：
1. README、AGENTS.md、package.json、启动脚本和构建配置。
2. 与本次任务相关的组件、样式、资产和路由顺序。
3. 当前项目的技术栈、启动方式、构建方式和已有设计规则。
4. 可能影响本次修改的约束，例如不要重构业务代码、不要破坏动效、不要改无关文件。

输出一份简洁的上下文地图：
- 项目做什么
- 当前页面结构
- 本次修改会碰到哪些模块
- 风险点
- 验证方式

只做读取和分析，不要修改文件。`,
  },
  {
    id: '03',
    title: '拆解计划',
    badge: 'Plan',
    icon: GitPullRequest,
    desc: '在改代码前锁定范围、文件责任、验收方式，避免大模型随手扩散。',
    content: `基于刚才的上下文，请输出一份可执行计划，但不要开始实现。

计划必须包含：
1. 本次修改的目标和非目标。
2. 需要修改的模块，以及每个模块的责任。
3. 用户可见行为会发生什么变化。
4. 哪些交互、动效、布局必须保持。
5. 可能失败的地方，以及你准备如何验证。

计划要足够具体，让另一个工程师可以直接照着实现。
如果你发现我的要求有冲突，请指出冲突并给出推荐取舍。

等我确认计划后，再开始修改。`,
  },
  {
    id: '04',
    title: '执行与上线',
    badge: 'Ship',
    icon: Rocket,
    desc: '真正进入实现时，要求 Agent 小步修改、构建验证、浏览器验收、提交部署。',
    content: `请按已确认的计划执行。

执行规则：
1. 小步修改，不做无关重构。
2. 保留现有视觉语言和动效节奏，只升级必要部分。
3. 修改后必须运行 npm run build。
4. 用浏览器验证关键页面、移动端宽度、点击/复制/弹窗等交互。
5. 如果构建或浏览器验证失败，先修复再继续。
6. 最后总结：发现的问题、改了哪些文件、验证结果、如何启动或访问。

如果项目已连接 GitHub 和部署平台，请提交、推送并重新部署线上站点。`,
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

  if (!copied && navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  return Promise.resolve();
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
    <section id="prompts" className="py-24 md:py-32 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-semibold text-electric tracking-[0.3em] uppercase mb-4">核心指令库</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-6 leading-[1.15]">
            不要催它写代码。<br />
            先让它进入正确的工作流。
          </h3>
          <p className="text-[16px] text-apple-text-muted leading-relaxed max-w-2xl mx-auto">
            真正有价值的提示词不是一句咒语，而是一套能采访、建模、拆解、验证并交付的工程协议。
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
                  className={`group flex w-full items-center gap-4 rounded-3xl border p-4 text-left transition-all duration-300 ${isActive ? 'border-electric bg-white shadow-[0_16px_45px_rgba(0,102,255,0.10)]' : 'border-transparent bg-white/55 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm'}`}
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
