import { motion } from 'motion/react';

export default function Concept() {
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
            代码不再是手写的产物。<br />
            <span className="text-gray-400 border-b-2 border-gray-100">它是自然语言被编译器强约束后的副产品。</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -4 }} className="group">
            <div className="w-10 h-10 border border-gray-200 text-apple-text rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-apple-text group-hover:shadow-sm">
              <span className="font-mono text-sm font-semibold">01</span>
            </div>
            <h4 className="text-[19px] font-bold mb-3 tracking-tight">语言即架构</h4>
            <p className="text-apple-text-muted text-[15px] leading-relaxed">
              AI 编程并非简单的代码自动补全。它要求我们将自然语言升维：用精确的指令描述数据流向、组件边界与错误处理逻辑。如无必要，勿增实体。
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -4 }} className="group">
            <div className="w-10 h-10 bg-apple-text text-white rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-md group-hover:shadow-black/10">
              <span className="font-mono text-sm font-semibold">02</span>
            </div>
            <h4 className="text-[19px] font-bold mb-3 tracking-tight">专注状态与业务</h4>
            <p className="text-apple-text-muted text-[15px] leading-relaxed">
              当拼写语法和 API 记忆不再是瓶颈，工程师 100% 的精力应当回归系统设计的本质：思考业务边界、状态机流转与底层数据安全。
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} whileHover={{ y: -4 }} className="group">
            <div className="w-10 h-10 border border-gray-200 text-apple-text rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-apple-text group-hover:shadow-sm">
              <span className="font-mono text-sm font-semibold">03</span>
            </div>
            <h4 className="text-[19px] font-bold mb-3 tracking-tight">确定性的护城河</h4>
            <p className="text-apple-text-muted text-[15px] leading-relaxed">
              大模型的输出天然带有概率性盲区，而工程环境需要绝对的确定性。我们必须引入审计、原子化修改与自动化校验，在这两者之间建立硬性防线。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
