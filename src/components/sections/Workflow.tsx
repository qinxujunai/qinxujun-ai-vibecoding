import { motion } from 'motion/react';
import { useSiteSettings } from '../../context/SiteSettings';

export default function Workflow() {
  const { content } = useSiteSettings();
  const { workflow } = content;

  return (
    <section id="workflow" className="bg-[var(--page-bg)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[11px] font-semibold text-apple-text-muted tracking-[0.3em] uppercase mb-4">{workflow.eyebrow}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-apple-text tracking-tight mb-6 leading-[1.15]">
              <span className="block">{workflow.titleTop}</span>
              <span className="block">{workflow.titleBottom}</span>
            </h3>
            <p className="text-apple-text-muted text-lg mb-10">
              {workflow.desc}
            </p>
            
            <div className="space-y-8">
              {workflow.steps.map((step, idx) => (
                <div key={idx} className="flex gap-5 group items-start rounded-2xl -mx-3 px-3 py-2 transition-colors duration-300 hover:bg-apple-gray/60">
                  <div className="font-mono text-sm font-semibold text-apple-text-muted mt-1 w-6 transition-colors duration-300 group-hover:text-electric">{step.id}</div>
                  <div>
                    <h4 className="text-[17px] font-bold text-apple-text mb-1.5 transition-colors duration-300 group-hover:text-electric">{step.title}</h4>
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
            className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-apple-gray shadow-[0_10px_40px_rgba(0,0,0,0.05)] ring-1 ring-[var(--border-subtle)]"
          >
            {/* Native CSS Diagram representation */}
            <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
              <div className="flex flex-col gap-3 w-full max-w-sm mx-auto relative">
                
                {/* Connecting Line */}
                <div className="absolute left-[24px] top-[40px] bottom-[40px] w-0.5 bg-gray-200 -z-10"></div>

                <div className="flex items-center gap-4 bg-[var(--surface-card)] p-4 rounded-2xl shadow-sm border border-[var(--border-subtle)] z-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-apple-text border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                  <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[0]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[0]}</div>
                </div>

                <div className="flex items-center gap-4 bg-[var(--surface-card)] p-4 rounded-2xl shadow-sm border border-[var(--border-subtle)] z-10 ml-5 relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-apple-text border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                  <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[1]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[1]}</div>
                </div>

                <div className="flex items-center gap-4 bg-[var(--surface-card)] p-4 rounded-2xl shadow-sm border border-electric z-10 ml-10 relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-electric text-white text-[10px] font-bold rounded-md whitespace-nowrap hidden sm:block">Review Gate</div>
                  <div className="w-4 h-4 rounded-full bg-electric border-4 border-white overflow-visible"></div>
                  <div className="font-mono text-xs text-electric/70">{workflow.diagramLabels[2]}</div>
                  <div className="ml-auto text-sm font-bold text-electric tracking-tight">{workflow.diagramCodes[2]}</div>
                </div>

                <div className="flex items-center gap-4 bg-[var(--surface-card)] p-4 rounded-2xl shadow-sm border border-[var(--border-subtle)] z-10 ml-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-apple-text border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                  <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[3]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[3]}</div>
                </div>

                <div className="flex items-center gap-4 bg-[var(--surface-card)] p-4 rounded-2xl shadow-sm border border-[var(--border-subtle)] z-10 ml-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="w-4 h-4 rounded-full bg-[#FF5F56] border-4 border-white shadow-sm ring-1 ring-[#FF5F56]/30"></div>
                  <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[4]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[4]}</div>
                </div>
                
                <div className="flex items-center gap-4 bg-black text-white p-4 rounded-2xl shadow-lg border border-gray-800 z-10 mt-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-black"></div>
                  <div className="font-mono text-xs text-gray-400">{workflow.diagramLabels[5]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">{workflow.diagramCodes[5]}</div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
