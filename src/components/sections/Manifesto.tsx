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
              在这个工具不断进化的时代，代码正在变得越来越容易被生成，想法也越来越容易被推到现实面前。
            </p>
            <p>
              但我始终认为，<span className="text-electric">工具最终只是双手的延伸。</span>它可以帮你更快地试错、更快地抵达、更快地把模糊的想法变成可触碰的东西；却不能替你决定，什么值得创造，什么值得热爱，什么值得用时间去交换。
            </p>
            <p>
              你可以复制一份强大的 Prompt，也可以调用最先进的模型组合；<span className="opacity-60">但永远无法被复制的，是你读过的书、经历过的事、你对世界的独立理解，以及你敏锐感知并精确定义痛点的能力。</span>
            </p>
            <p>
              当机器拥有了越来越强的执行能力，生而为人的美感、品味、判断、共情与长期热爱，反而会变得更加珍贵。
            </p>
            <p>
              AI 进化得越快，我们越需要慢下来。<br />
              沉下心去阅读真正好的书，去安静地体察生活，去想清楚自己为什么创造，又想把世界带向哪里。
            </p>
            <p>
              当你清晰地定义了你想创造的世界，再用自然语言与这些工具赋予你的双手，把那些让世界变得更美好的想法付诸现实。
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
