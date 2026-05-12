import { motion } from 'motion/react';

export default function Manifesto() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden flex items-center justify-center border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-12">写在最后 · Epilogue</h2>
          
          <div className="text-left space-y-8 text-[16px] md:text-[18px] text-apple-text leading-[1.8] font-medium tracking-tight">
            <p>
              在这个智能工具狂飙突进的时代，底层模型在不断迭代，自动化代理正以前所未有的速度接管代码的“执行”层。
            </p>
            <p>
              但我始终认为，无论是提示词、CLI 代理还是 MCP 体系，<span className="text-electric">工具最终只是双手的延伸。</span>
            </p>
            <p>
              你可以轻易从社区复制一份极其强大的架构 Prompt，也可以轻易调用最先进的模型组合；<span className="opacity-60">但永远无法被直接复制粘贴的，是你读过的书、你经历过的事、你对这个世界的独立理解，以及你敏锐感知并精准定义痛点的能力。</span>
            </p>
            <p>
              当机器拥有了执行维度的庞大算力储备，生而为人的美感、品味，与我们基于人性的感性共情，将变得前所未有的昂贵且不可替代。
            </p>
            <p>
              AI 进化得越快，我们越需要慢下来。<br />
              沉下心去阅读真正好的书，去安静地体察生活。去思考生而为人的意义到底是什么，去发掘那些让你终生追求的热爱。
            </p>
            <p>
              当你清晰地定义了你想要创造的世界，再利用自然语言与这些工具赋予你的双手，把那些让世界变得更美好的想法付诸现实。
            </p>
            <p className="font-semibold text-xl pt-4 text-electric">
              这不仅是自然语言编程的边界，也是创造者的终极浪漫。
            </p>
            <p className="pt-8 text-sm text-gray-400 font-normal">
              —— 秦徐俊
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
