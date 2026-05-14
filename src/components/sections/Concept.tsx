import { motion } from 'motion/react';

export default function Concept() {
  const principles = [
    {
      id: '01',
      title: '提出问题的能力',
      desc: '自然语言编程的起点不是“写个页面”，而是把模糊想法采访成目标、用户、边界与验收标准。问题定义得越清楚，模型越像工程伙伴，而不是许愿池。',
      active: false,
    },
    {
      id: '02',
      title: '组织上下文的能力',
      desc: 'README、AGENTS.md、Skills、MCP、截图、日志和历史决策都不是附件，它们是模型的工作记忆。上下文越结构化，输出越接近你的真实意图。',
      active: true,
    },
    {
      id: '03',
      title: '交付确定性的能力',
      desc: '模型负责执行，人负责边界。计划、原子修改、构建、浏览器验收和复盘，把概率性的生成结果压进可验证的工程闭环。',
      active: false,
    },
  ];

  return (
    <section id="concept" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <h2 className="text-[11px] font-semibold text-electric tracking-[0.3em] uppercase mb-6">第一性原理 (First Principles)</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apple-text tracking-tight leading-[1.15]">
            <span className="block">代码不再只是手写的产物</span>
            <span className="block text-gray-400 border-b-2 border-gray-100">它来自自然语言，也必须穿过工程约束</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {principles.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${item.active ? 'bg-apple-text text-white group-hover:shadow-md group-hover:shadow-black/10' : 'border border-gray-200 text-apple-text group-hover:border-apple-text group-hover:shadow-sm'}`}>
                <span className="font-mono text-sm font-semibold">{item.id}</span>
              </div>
              <h4 className="text-[19px] font-bold mb-3 tracking-tight">{item.title}</h4>
              <p className="text-apple-text-muted text-[15px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
