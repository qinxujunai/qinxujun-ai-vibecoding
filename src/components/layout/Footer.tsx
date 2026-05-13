import wechatQr from '../../assets/qin-xujun-wechat-qr.png';

export default function Footer() {
  return (
    <footer id="contact" className="bg-apple-text text-apple-gray text-[13px]">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <div className="w-2 h-2 rounded-full bg-white/80"></div>
              <span className="font-bold text-[15px] text-white tracking-tight">ai.vibecoding</span>
            </div>
            <p className="max-w-xl text-[16px] font-medium leading-relaxed text-gray-300">
              自然语言编程不是把代码写快一点，而是把人的判断、系统边界与模型能力压缩成可交付的工程秩序。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-gray-500 opacity-80 md:justify-start">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>
                Designed & Engineered by <span className="text-gray-300 font-medium">Qin Xujun</span>
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur md:mx-0">
            <div className="rounded-[1.4rem] bg-white p-3">
              <img src={wechatQr} alt="Qin Xujun WeChat QR code" className="w-full rounded-2xl object-contain" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 px-1">
              <div>
                <div className="text-sm font-semibold text-white">Qin Xujun</div>
                <div className="mt-0.5 text-xs text-gray-400">WeChat / Hangzhou</div>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-200">扫码连接</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
