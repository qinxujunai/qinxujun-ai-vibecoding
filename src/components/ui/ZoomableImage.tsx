import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ZoomableImage({ src, alt, className = '' }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.img
        src={src}
        alt={alt}
        className={`cursor-zoom-in object-cover ${className}`}
        onClick={() => setIsOpen(true)}
        layoutId={`img-${src}`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 sm:top-10 sm:right-10 p-3 bg-apple-gray text-apple-text rounded-full hover:bg-gray-200 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              src={src}
              alt={alt}
              layoutId={`img-${src}`}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
