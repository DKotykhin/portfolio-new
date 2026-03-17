'use client';

import dynamic from 'next/dynamic';

const ToastContainer = dynamic(() => import('react-toastify').then(m => ({ default: m.ToastContainer })), {
  ssr: false,
});

export const ToastProvider = () => (
  <ToastContainer
    position="top-right"
    autoClose={4000}
    hideProgressBar={true}
    newestOnTop={false}
    theme="colored"
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);
