export default function Footer() {
  return (
    <footer className="py-12 bg-apple-text text-apple-gray text-center text-[13px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-white/80"></div>
          <span className="font-bold text-[15px] text-white tracking-tight">ai.vibecoding</span>
        </div>
        <p className="text-gray-400 font-medium">探索由自然语言驱动的现代软件工程体系。</p>
        <div className="mt-8 flex items-center justify-center gap-3 text-gray-500 opacity-80">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <span>
            Designed & Engineered by <span className="text-gray-300 font-medium">Qin Xujun</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
