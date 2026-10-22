import { motion } from 'motion/react';
import { ArrowUpRight, Check, FileText, Zap } from 'lucide-react';
import { workflowSources } from '../../content/site';
import { useSiteSettings } from '../../context/SiteSettings';
import { EASE, Reveal } from '../ui/Section';

const nodeCard =
  'flex items-center gap-4 bg-[var(--surface-card)] p-4 rounded-2xl shadow-sm border z-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md';
const nodeDot = 'w-4 h-4 shrink-0 rounded-full border-4 border-[var(--surface-card)] shadow-sm';
const gateBadge = 'absolute -left-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-electric text-[var(--on-accent)] text-[10px] font-bold rounded-md whitespace-nowrap hidden sm:block';

export default function Workflow() {
  const { content } = useSiteSettings();
  const { workflow } = content;
  const total = workflowSources.length;

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
            <p className="text-apple-text-muted text-[17px] md:text-lg leading-relaxed mb-6">{workflow.desc}</p>
            <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-apple-gray px-3.5 py-1.5 text-[13px] font-medium text-apple-text">
              <FileText className="h-3.5 w-3.5 text-electric" />
              {workflow.charter}
            </p>

            <div className="space-y-4">
              {workflow.steps.map((step) => (
                <div key={step.id} className="flex gap-5 group items-start rounded-2xl -mx-3 px-3 py-2 transition-colors duration-300 hover:bg-apple-gray/60">
                  <div className="font-mono text-sm font-semibold text-apple-text-muted mt-1 w-6 transition-colors duration-300 group-hover:text-electric">{step.id}</div>
                  <div>
                    <h3 className="text-[17px] font-bold text-apple-text mb-1 transition-colors duration-300 group-hover:text-electric">{step.title}</h3>
                    <p className="text-[15px] text-apple-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3 rounded-2xl border border-[var(--border-subtle)] bg-apple-gray/50 px-4 py-3.5">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-warm" />
              <p className="text-[14px] leading-relaxed text-apple-text">
                {workflow.skipRule}
                <span className="ml-1.5 text-apple-text-muted">— {workflow.skipSource}</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-apple-gray shadow-[0_10px_40px_rgba(0,0,0,0.05)] ring-1 ring-[var(--border-subtle)]"
          >
            {/* Native CSS diagram: the evidence each gate leaves */}
            <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
              <p className="mb-6 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-text-muted">{workflow.diagramTitle}</p>
              <div className="flex flex-col gap-3 w-full max-w-sm mx-auto relative">
                <div className="absolute left-[24px] top-[40px] bottom-[40px] w-0.5 bg-[var(--border-soft)]"></div>

                <div className={`${nodeCard} border-[var(--border-subtle)]`}>
                  <div className={`${nodeDot} bg-apple-text ring-1 ring-[var(--border-soft)]`}></div>
                  <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[0]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[0]}</div>
                </div>

                <div className={`${nodeCard} border-electric ml-5 relative`}>
                  <div className={gateBadge}>{workflow.reviewGate}</div>
                  <div className={`${nodeDot} bg-electric`}></div>
                  <div className="font-mono text-xs text-electric sm:pl-12">{workflow.diagramLabels[1]}</div>
                  <div className="ml-auto text-sm font-bold text-electric tracking-tight">{workflow.diagramCodes[1]}</div>
                </div>

                {/* Build ⇄ Verify loop: a failed check goes back to the patch */}
                <div className="relative ml-10 mr-8 flex flex-col gap-3 sm:mr-0">
                  <div aria-hidden className="absolute -right-4 top-[25%] bottom-[25%] w-4 rounded-r-xl border-y-2 border-r-2 border-dashed border-danger/50" />
                  <span className="absolute -right-4 top-1/2 z-20 translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-danger px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--on-accent)]">{workflow.loopLabel}</span>
                  <div className={`${nodeCard} border-[var(--border-subtle)]`}>
                    <div className={`${nodeDot} bg-apple-text ring-1 ring-[var(--border-soft)]`}></div>
                    <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[2]}</div>
                    <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[2]}</div>
                  </div>
                  <div className={`${nodeCard} border-[var(--border-subtle)]`}>
                    <div className={`${nodeDot} bg-danger ring-1 ring-danger/30`}></div>
                    <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[3]}</div>
                    <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[3]}</div>
                  </div>
                </div>

                <div className={`${nodeCard} border-[var(--border-subtle)] ml-8`}>
                  <div className={`${nodeDot} bg-apple-text ring-1 ring-[var(--border-soft)]`}></div>
                  <div className="font-mono text-xs text-apple-text-muted">{workflow.diagramLabels[4]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight text-apple-text">{workflow.diagramCodes[4]}</div>
                </div>

                <div className="relative flex items-center gap-4 bg-black text-white p-4 rounded-2xl shadow-lg border border-white/10 z-10 mt-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  <div className={gateBadge}>{workflow.reviewGate}</div>
                  <div className="w-4 h-4 shrink-0 rounded-full bg-white border-4 border-black"></div>
                  <div className="font-mono text-xs text-white/50 sm:pl-12">{workflow.diagramLabels[5]}</div>
                  <div className="ml-auto text-sm font-semibold tracking-tight">{workflow.diagramCodes[5]}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cross-check matrix: which workflow names which gate */}
        <Reveal className="mt-24">
          <h3 className="mb-8 text-center text-[13px] font-semibold text-apple-text-muted">{workflow.matrixTitle}</h3>

          <div className="hidden overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] lg:block">
            <div className="grid grid-cols-[110px_repeat(5,1fr)_72px] gap-3 border-b border-[var(--border-subtle)] bg-apple-gray/70 px-6 py-3.5">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-apple-text-muted">{workflow.matrixStep}</span>
              {workflowSources.map((source) => (
                <a key={source.key} href={source.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 text-[13px] font-bold text-apple-text hover:text-electric">
                  {source.name}
                  <ArrowUpRight className="h-3 w-3 text-apple-text-muted group-hover:text-electric" />
                </a>
              ))}
              <span className="text-right font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-apple-text-muted">{workflow.matrixCoverage}</span>
            </div>
            {workflow.matrix.map((row, rowIdx) => {
              const covered = row.cells.filter(Boolean).length;
              const full = covered === total;
              return (
                <div key={row.step} className={`grid grid-cols-[110px_repeat(5,1fr)_72px] items-center gap-3 border-b border-[var(--border-subtle)] px-6 py-3 last:border-b-0 ${rowIdx === 0 ? 'bg-apple-gray/30' : ''}`}>
                  <span className="text-[14px] font-bold text-apple-text">{row.step}</span>
                  {row.cells.map((cell, idx) => (
                    <span key={idx} className={`min-w-0 font-mono text-[12px] leading-snug ${cell ? 'text-apple-text' : 'text-apple-text-muted/50'}`}>
                      {cell || '—'}
                    </span>
                  ))}
                  <span className={`justify-self-end rounded-full px-2.5 py-0.5 font-mono text-[12px] font-bold ${full ? 'bg-success/10 text-success' : 'bg-apple-gray text-apple-text-muted'}`}>
                    {covered}/{total}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            {workflow.matrix.map((row) => {
              const covered = row.cells.filter(Boolean).length;
              const full = covered === total;
              return (
                <div key={row.step} className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[16px] font-bold text-apple-text">{row.step}</span>
                    <span className={`rounded-full px-2.5 py-0.5 font-mono text-[12px] font-bold ${full ? 'bg-success/10 text-success' : 'bg-apple-gray text-apple-text-muted'}`}>
                      {covered}/{total}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {row.cells.map((cell, idx) =>
                      cell ? (
                        <li key={idx} className="flex items-baseline gap-2 text-[13px]">
                          <Check className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-success" />
                          <span className="w-24 shrink-0 font-semibold text-apple-text">{workflowSources[idx].name}</span>
                          <span className="min-w-0 font-mono text-[12px] text-apple-text-muted">{cell}</span>
                        </li>
                      ) : null,
                    )}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-[15px] font-semibold leading-relaxed text-apple-text">{workflow.matrixNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
