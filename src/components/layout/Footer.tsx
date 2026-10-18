import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Download, MessageCircle, QrCode, Smartphone, X } from 'lucide-react';
import wechatQr from '../../assets/qin-xujun-wechat-qr.png';
import { useSiteSettings } from '../../context/SiteSettings';
import { EASE } from '../ui/Section';

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { content } = useSiteSettings();
  const { footer } = content;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/40 backdrop-blur-md sm:items-center sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          onClick={onClose}
        >
          {/* Bottom sheet on phones, centered card on larger screens */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={footer.modalLabel}
            className="relative w-full max-w-[400px] rounded-t-[2rem] border border-[var(--border-subtle)] bg-[var(--surface-card)] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 text-apple-text shadow-[0_32px_100px_rgba(0,0,0,0.28)] sm:rounded-[2rem] sm:pb-6 sm:pt-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.38, ease: EASE }}
            onClick={(event) => event.stopPropagation()}
          >
            <div aria-hidden className="mx-auto mb-4 h-1 w-10 rounded-full bg-[var(--border-soft)] sm:hidden" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#07C160]/10 px-2.5 py-1 text-[12px] font-semibold text-[#07A34F]">
                  <QrCode className="h-3.5 w-3.5" />
                  {footer.badge}
                </span>
                <h3 className="mt-3 text-[26px] font-bold leading-tight tracking-tight">{footer.name}</h3>
                <p className="mt-1 font-mono text-[12px] text-apple-text-muted">{footer.role}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-apple-gray text-apple-text transition-colors duration-300 hover:bg-[var(--border-soft)]"
                aria-label={footer.closeLabel}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-apple-text">{footer.desc}</p>

            {/* The code stays on white in both themes so scanners can read it */}
            <div className="mx-auto mt-5 w-full max-w-[280px] rounded-[1.5rem] bg-white p-3 shadow-[0_18px_50px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <img
                src={wechatQr}
                alt={`${footer.name} WeChat QR code`}
                width="512"
                height="512"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full rounded-[1rem] object-contain"
              />
            </div>

            <p className="mt-5 flex gap-2 text-[13px] leading-relaxed text-apple-text-muted">
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0" />
              {footer.hint}
            </p>

            <a
              href={wechatQr}
              download="qin-xujun-wechat-qr.png"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--button-primary-bg)] py-3 text-[14px] font-semibold text-[var(--button-primary-text)] transition-all duration-300 hover:bg-[var(--button-primary-hover)]"
            >
              <Download className="h-4 w-4" />
              {footer.save}
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function Footer() {
  const { content } = useSiteSettings();
  const { footer } = content;
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = wechatQr;

    if (image.decode) {
      image.decode().catch(() => {
        // The modal can still render the image normally if eager decoding is interrupted.
      });
    }
  }, []);

  return (
    <footer id="contact" className="bg-[#1D1D1F] text-[13px] text-apple-gray">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/80"></div>
            <span className="text-[15px] font-bold tracking-tight text-white">ai.vibecoding</span>
          </div>
          <p className="max-w-2xl text-balance text-[17px] font-medium leading-relaxed text-white/80">{footer.statement}</p>

          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-3 text-[14px] font-semibold text-[#1D1D1F] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5F5F7] active:translate-y-0"
          >
            <MessageCircle className="h-4 w-4" />
            {footer.contact}
          </button>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-white/40">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="h-1 w-1 rounded-full bg-white/25"></span>
            <span>
              {footer.designed} <span className="font-medium text-white/75">Qin Xujun</span>
            </span>
          </div>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  );
}
