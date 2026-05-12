import { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';

const prompts = [
  {
    title: "需求对齐与防御阵地建设",
    desc: "使用场景：刚刚引入代码库，防止大模型在缺乏全局视野时盲目产生业务代码。",
    content: "你面临的是一个全新的工程任务。请暂缓输出任何业务代码。首先：\n1. 与我沟通核对项目的商业目标与领域核心概念。\n2. 总结你需要遵从的技术基线（例如：全盘采用 Tailwind、摒弃各类强侵入型组件库）。\n3. 将以上工程纪律、视觉品味要求以及防止代码老化的约束，提炼为一份包含严苛铁律的 `AGENTS.md` 文件。待我确认此防腐层后，我们再开启代码变更。"
  },
  {
    title: "原子级修改与自愈循环",
    desc: "使用场景：开始执行某一功能区块的修改时，要求智能体形成执行闭环。",
    content: "现在我们需要落实 [具体功能模块]。在你挥动改动的屠刀前：\n1. 请先读取并理解 `AGENTS.md` 中的设计底线。\n2. 将改动限制在最小原子域内，确保不要对无关的外围架构进行无效的重写。\n3. 在生成或修改完代码后，必须调用系统命令行终端静默执行 `npm run build` 和类型校验。如果出现红色的报错或警告，赋予你自我纠错与修复的最高权限，直到其清零并流转。"
  },
  {
    title: "视觉走查与像素级对抗",
    desc: "使用场景：前端视觉组装完毕，通过多模态能力检测其实际呈现与 Vibe 审美的拟合度。",
    content: "请你审视当前截取的应用界面快照，作为顶尖的设计工程师进行严苛验收：\n1. 审查排版网格：空间留白是否匀称？是否存在挤压造成的呼吸感丧失？\n2. 审读组件光影：边框与阴影是否表现出“自然克制”的高级感？\n3. 色彩张力：前景与背景对比度是否准确引导视觉焦点？\n请不要进行笼统的空泛描述，直接给出需要更新的精准 Tailwind 类名数组以及要修剪的元素树节点。"
  }
];

function PromptCard({ title, desc, content }: { title: string, desc: string, content: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6 md:px-8 md:py-6 border-b border-gray-100 flex justify-between items-center bg-white">
        <div>
          <h4 className="text-[19px] font-bold text-apple-text mb-1 tracking-tight">{title}</h4>
          <p className="text-[14px] text-apple-text-muted">{desc}</p>
        </div>
        <button 
          onClick={handleCopy}
          className="w-10 h-10 bg-apple-gray text-apple-text rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center shrink-0 ml-4"
          title="复制指令"
        >
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-6 md:p-8 bg-[#FAFAFA] font-mono text-[13px] text-gray-700 whitespace-pre-wrap leading-relaxed overflow-x-auto selection:bg-electric selection:text-white">
        {content}
      </div>
    </div>
  );
}

export default function Prompts() {
  return (
    <section id="prompts" className="py-24 md:py-32 bg-apple-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">核心指令资产</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-6">
            拒绝闲聊，<br />
            下发专业的系统指令。
          </h3>
          <p className="text-[16px] text-apple-text-muted leading-relaxed max-w-2xl mx-auto">
            不再是随意的聊天对话，而是具备极强工程约束力的结构化微指令。<br/>在架构防偏离与视觉像素级走查等高危环节，直接粘贴它们作为你的安全锁。
          </p>
        </div>

        <div className="space-y-8">
          {prompts.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <PromptCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
