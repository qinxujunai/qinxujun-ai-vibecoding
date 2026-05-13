import { motion } from 'motion/react';
import ZoomableImage from '../ui/ZoomableImage';
import { BookOpen, CheckSquare, Edit3, Image as ImageIcon, Search, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  { id: "01", title: "Alignment (自然语言 PRD)", desc: "停止用干瘪的指令拼凑功能。先用人话勾勒商业意图与交互体验，让 AI 和你共同对齐核心业务边界和防偏离策略。" },
  { id: "02", title: "Constitution (宪章与防腐层)", desc: "强制让大模型以 .cursorrules 或 AGENTS.md 的形式，输出包含架构红线、视觉基因的宪章。锁定全局审美与技术流派底线。" },
  { id: "03", title: "Decomposition (沙盘推演)", desc: "模型须输出包含确切修改范围的大脑执行计划树。在核心路径未被人类审查确认前，严禁任何一行破坏性代码越界。" },
  { id: "04", title: "Execution (原子级修改)", desc: "将浩瀚的重写意志，转化为单文件的局部修剪。要求智能体遵循单一职责去修改树节点，拒绝“大锅饭”式的全盘翻盘。" },
  { id: "05", title: "Self-Healing (零预警编译)", desc: "你只需要下发指令。模型必须能够自主执行 npm run build，并在发生 TS 灾难或构建断链时，通过终端回路接管错误并完成自愈修复。" },
  { id: "06", title: "Calibration (多模态校准)", desc: "上传最终界面的渲染图，让视觉模型进行对抗查漏，像苛刻的设计总监一样，校准微观的色差、间距失调与阴影膨胀。" },
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
              将概率，<br />
              转化为绝对的确定性。
            </h3>
            <p className="text-apple-text-muted text-lg mb-10">
              不要直接运行未经审查的代码。遵守这条严格的六段防线验证流，是保证现代 AI 编程项目不走向失控的唯一途径。
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
                  <div className="font-mono text-xs text-apple-text-muted">Chat Interface</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">01_Alignment</div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 z-10 ml-5 relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-apple-text border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                  <div className="font-mono text-xs text-apple-text-muted">AGENTS.md</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">02_Constitution</div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-electric z-10 ml-10 relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-electric text-white text-[10px] font-bold rounded-md whitespace-nowrap hidden sm:block">Human Check</div>
                  <div className="w-4 h-4 rounded-full bg-electric border-4 border-white overflow-visible"></div>
                  <div className="font-mono text-xs text-electric/70">Diff Plan</div>
                  <div className="ml-auto text-sm font-bold text-electric tracking-tight">03_Decompose</div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 z-10 ml-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-apple-text border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                  <div className="font-mono text-xs text-apple-text-muted">AST Patching</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">04_Edit</div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 z-10 ml-8 relative group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-[#FF5F56] border-4 border-white shadow-sm ring-1 ring-[#FF5F56]/30"></div>
                  <div className="absolute -left-1 opacity-0 group-hover:opacity-100 transform -translate-x-full pr-3 transition-opacity top-1/2 -translate-y-1/2">
                    <span className="bg-gray-800 text-white text-[10px] px-2 py-1 flex rounded-md">
                      Auto-recover
                    </span>
                  </div>
                  <div className="font-mono text-xs text-apple-text-muted">CLI Self-Repair</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">05_Heal</div>
                </div>
                
                <div className="flex items-center gap-4 bg-black text-white p-4 rounded-2xl shadow-lg border border-gray-800 z-10 mt-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-black"></div>
                  <div className="font-mono text-xs text-gray-400">Vision Model</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">06_Calibrate</div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
