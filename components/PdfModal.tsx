'use client';

import { useState } from 'react';

interface PdfModalProps {
  label: string;
  src: string;
  triggerClassName?: string;
}

export const PdfModal = ({ label, src, triggerClassName }: PdfModalProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      window.open(src, '_blank');
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={triggerClassName}>
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/90">
          <div className="flex justify-end p-3">
            <button
              onClick={() => setOpen(false)}
              className="text-antiqueWhite hover:text-orange px-4 py-1 text-2xl font-bold transition-colors duration-300"
              aria-label="Close PDF viewer"
            >
              ✕
            </button>
          </div>
          <iframe src={src} className="w-full flex-1" title={label} />
        </div>
      )}
    </>
  );
};
