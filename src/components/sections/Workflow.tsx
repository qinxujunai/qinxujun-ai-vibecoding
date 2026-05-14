import { motion } from 'motion/react';

const steps = [
  { id: "01", title: "Interview (访谈对话)", desc: "先问问题，不写代码。把模糊需求压缩成目标用户、业务边界、验收标准与 AGENTS.md 草案。" },
  { id: "02", title: "Context (上下文装载)", desc: "读取 README、AGENTS.md、package.json、启动脚本和相关源码，把项目事实、规则与风险装进同一张 Context Map。" },
  { id: "03", title: "Plan Gate (计划闸门)", desc: "在改动前锁定文件责任、用户可见变化、动效守恒和测试路径。计划未经确认，不允许进入实现。" },
  { id: "04", title: "Atomic Patch (原子修改)", desc: "把大任务拆成小补丁，沿着组件边界精确落点，拒绝无关重构和全盘翻新。" },
  { id: "05", title: "Verify Loop (构建自愈)", desc: "运行 npm run build，遇到类型、构建或依赖错误先自修复。没有新鲜验证证据，不声明完成。" },
  { id: "06", title: "Ship Review (浏览器验收)", desc: "用真实浏览器检查页面、移动端宽度、复制、弹窗、外链与控制台日志，再提交、推送和部署。" },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">防御性交付管线</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-6 leading-[1.15]">
              <span className="block">先立边界</span>
              <span className="block">再把概率压成确定性</span>
            </h3>
            <p className="text-apple-text-muted text-lg mb-10">
              AI 写代码很快，但交付靠流程。真正可靠的自然语言编程，是让每一次修改都穿过访谈、上下文、计划、构建和浏览器验收这几道闸门。
            </p>
            
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-5 group items-start rounded-2xl -mx-3 px-3 py-2 transition-colors duration-300 hover:bg-apple-gray/60">
                  <div className="font-mono text-sm font-semibold text-apple-text-muted mt-1 w-6 transition-colors duration-300 group-hover:text-electric">{step.id}</div>
                  <div>
                    <h4 className="text-[17px] font-bold text-apple-text mb-1.5 transition-colors duration-300 group-hover:text-black">{step.title}</h4>
                    <p className="text-[15px] text-apple-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] ring-1 ring-gray-100 h-full flex flex-col bg-apple-gray"
          >
            {/* Native CSS Diagram representation */}
            <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
              <div className="flex flex-col gap-3 w-full max-w-sm mx-auto relative">
                
                {/* Connecting Line */}
                <div className="absolute left-[24px] top-[40px] bottom-[40px] w-0.5 bg-gray-200 -z-10"></div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 z-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-apple-text border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                  <div className="font-mono text-xs text-apple-text-muted">Interview</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">01_AGENTS</div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 z-10 ml-5 relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-apple-text border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                  <div className="font-mono text-xs text-apple-text-muted">Context Map</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">02_Context</div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-electric z-10 ml-10 relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-electric text-white text-[10px] font-bold rounded-md whitespace-nowrap hidden sm:block">Review Gate</div>
                  <div className="w-4 h-4 rounded-full bg-electric border-4 border-white overflow-visible"></div>
                  <div className="font-mono text-xs text-electric/70">Diff Plan</div>
                  <div className="ml-auto text-sm font-bold text-electric tracking-tight">03_Plan</div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 z-10 ml-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-apple-text border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                  <div className="font-mono text-xs text-apple-text-muted">Atomic Patch</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">04_Edit</div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 z-10 ml-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-[#FF5F56] border-4 border-white shadow-sm ring-1 ring-[#FF5F56]/30"></div>
                  <div className="font-mono text-xs text-apple-text-muted">Build Repair</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">05_Verify</div>
                </div>
                
                <div className="flex items-center gap-4 bg-black text-white p-4 rounded-2xl shadow-lg border border-gray-800 z-10 mt-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-black"></div>
                  <div className="font-mono text-xs text-gray-400">Browser QA</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">06_Ship</div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
