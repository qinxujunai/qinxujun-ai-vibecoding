import { useSiteSettings } from '../../context/SiteSettings';
import { Reveal } from '../ui/Section';

export default function Manifesto() {
  const { content } = useSiteSettings();
  const { manifesto } = content;

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[var(--page-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-12 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-apple-text-muted">{manifesto.eyebrow}</p>

          <div className="space-y-8 text-left text-[16px] font-medium leading-[1.8] tracking-tight text-apple-text md:text-[18px]">
            {manifesto.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <p className="pt-4 text-xl font-semibold text-electric">{manifesto.closing}</p>
            <p className="pt-8 text-sm font-normal text-apple-text-muted">— {manifesto.signature}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
