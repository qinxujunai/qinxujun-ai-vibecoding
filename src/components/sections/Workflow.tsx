import { motion } from 'motion/react';
import { useSiteSettings } from '../../context/SiteSettings';
import { EASE } from '../ui/Section';

const nodeCard =
  'flex items-center gap-4 bg-[var(--surface-card)] p-4 rounded-2xl shadow-sm border z-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md';
const nodeDot = 'w-4 h-4 shrink-0 rounded-full border-4 border-[var(--surface-card)] shadow-sm';

export default function Workflow() {
  const { content } = useSiteSettings();
  const { workflow } = content;

  return (
    <section id="workflow" className="border-t border-[var(--border-subtle)] bg-[var(--page-bg)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-electric">{workflow.eyebrow}</p>
            <h2 className="text-[32px] md:text-5xl font-bold text-apple-text tracking-tight mb-6 leading-[1.12]">
              <span className="block">{workflow.titleTop}</span>
              <span className="block text-apple-text-muted">{workflow.titleBottom}</span>
            </h2>
            <p className="text-apple-text-muted text-[17px] md:text-lg leading-relaxed mb-10">{workflow.desc}</p>

            <div className="space-y-6">
              {workflow.steps.map((step) => (
                <div key={step.id} className="flex gap-5 group items-start rounded-2xl -mx-3 px-3 py-2 transition-colors duration-300 hover:bg-apple-gray/60">
                  <div className="font-mono text-sm font-semibold text-apple-text-muted mt-1 w-6 transition-colors duration-300 group-hover:text-electric">{step.id}</div>
                  <div>
                    <h3 className="text-[17px] font-bold text-apple-text mb-1.5 transition-colors duration-300 group-hover:text-electric">{step.title}</h3>
                    <p className="text-[15px] text-apple-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-apple-gray shadow-[0_10px_40px_rgba(0,0,0,0.05)] ring-1 ring-[var(--border-subtle)]"
          >
            {/* Native CSS diagram of the pipeline */}
            <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
              <p className="mb-6 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-text-muted">{workflow.diagramTitle}</p>
              <div className="flex flex-col gap-3 w-full max-w-sm mx-auto relative">
                {/* Connecting line */}
                <div className="absolute left-[24px] top-[40px] bottom-[40px] w-0.5 bg-[var(--border-soft)]"></div>

                <div className={`${nodeCard} border-[var(--border-subtle)]`}>
                  <div className={`${nodeDot} bg-apple-text ring-1 ring-[var(--border-soft)]`}></div>
                  <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[0]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[0]}</div>
                </div>

                <div className={`${nodeCard} border-[var(--border-subtle)] ml-5 relative`}>
                  <div className={`${nodeDot} bg-apple-text ring-1 ring-[var(--border-soft)]`}></div>
                  <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[1]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[1]}</div>
                </div>

                <div className={`${nodeCard} border-electric ml-10 relative`}>
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-electric text-white text-[10px] font-bold rounded-md whitespace-nowrap hidden sm:block">{workflow.reviewGate}</div>
                  <div className={`${nodeDot} bg-electric`}></div>
                  <div className="font-mono text-xs text-electric/70 sm:pl-12">{workflow.diagramLabels[2]}</div>
                  <div className="ml-auto text-sm font-bold text-electric tracking-tight">{workflow.diagramCodes[2]}</div>
                </div>

                {/* Patch ⇄ verify loop: failures go back to the patch step */}
                <div className="relative ml-8 mr-8 flex flex-col gap-3 sm:mr-0">
                  <div aria-hidden className="absolute -right-4 top-[25%] bottom-[25%] w-4 rounded-r-xl border-y-2 border-r-2 border-dashed border-danger/50" />
                  <span className="absolute -right-4 top-1/2 z-20 translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-danger px-1.5 py-0.5 font-mono text-[10px] font-semibold text-white">{workflow.loopLabel}</span>
                  <div className={`${nodeCard} border-[var(--border-subtle)]`}>
                    <div className={`${nodeDot} bg-apple-text ring-1 ring-[var(--border-soft)]`}></div>
                    <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[3]}</div>
                    <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[3]}</div>
                  </div>

                  <div className={`${nodeCard} border-[var(--border-subtle)]`}>
                    <div className={`${nodeDot} bg-danger ring-1 ring-danger/30`}></div>
                    <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[4]}</div>
                    <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[4]}</div>
                  </div>
                </div>

                <div className="relative flex items-center gap-4 bg-black text-white p-4 rounded-2xl shadow-lg border border-white/10 z-10 mt-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-electric text-white text-[10px] font-bold rounded-md whitespace-nowrap hidden sm:block">{workflow.reviewGate}</div>
                  <div className="w-4 h-4 shrink-0 rounded-full bg-white border-4 border-black"></div>
                  <div className="font-mono text-xs text-white/50 sm:pl-12">{workflow.diagramLabels[5]}</div>
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
