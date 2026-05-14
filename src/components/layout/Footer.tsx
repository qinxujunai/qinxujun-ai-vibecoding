import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircle, QrCode, X } from 'lucide-react';
import wechatQr from '../../assets/qin-xujun-wechat-qr.png';

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/35 px-4 pb-4 backdrop-blur-md sm:items-center sm:pb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="联系秦徐俊"
            className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/25 bg-white/92 p-4 shadow-[0_32px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:max-w-md sm:p-5"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(0,102,255,0.16),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(255,149,0,0.14),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(245,245,247,0.86))]" />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/75 text-apple-text shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:bg-white hover:shadow-md"
              aria-label="关闭联系弹窗"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-12">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[12px] font-semibold text-electric ring-1 ring-electric/10">
                <QrCode className="h-3.5 w-3.5" />
                WeChat
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-apple-text">联系秦徐俊</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-apple-text-muted">
                扫码添加微信，聊自然语言编程、AI Agent 工作流，或者把你的项目问题直接带过来。
              </p>
            </div>

            <div className="mt-6 rounded-[1.6rem] bg-white p-3 shadow-[0_18px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <img
                src={wechatQr}
                alt="Qin Xujun WeChat QR code"
                width="512"
                height="512"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full rounded-[1.1rem] object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 px-1">
              <div>
                <div className="text-sm font-semibold text-apple-text">Qin Xujun</div>
                <div className="mt-0.5 text-xs text-apple-text-muted">Hangzhou · ai.vibecoding</div>
              </div>
              <span className="rounded-full bg-apple-text px-3 py-1.5 text-xs font-semibold text-white">扫码连接</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function Footer() {
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
    <footer id="contact" className="bg-apple-text text-apple-gray text-[13px]">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/80"></div>
            <span className="font-bold text-[15px] text-white tracking-tight">ai.vibecoding</span>
          </div>
          <p className="max-w-2xl text-[16px] font-medium leading-relaxed text-gray-300">
            自然语言编程不是把代码写快一点，而是把人的判断、系统边界与模型能力压缩成可交付的工程秩序。
          </p>

          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-apple-text shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-apple-gray active:translate-y-0"
          >
            <MessageCircle className="h-4 w-4" />
            联系秦徐俊
          </button>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-gray-500 opacity-80">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>
              Designed & Engineered by <span className="text-gray-300 font-medium">Qin Xujun</span>
            </span>
          </div>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  );
}
