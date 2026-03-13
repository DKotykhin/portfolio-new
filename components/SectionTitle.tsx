'use client';

import { motion } from 'framer-motion';

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
  hidden: { opacity: 0, scale: 0 },
};

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <motion.p
      className="text-4xl font-bold text-antiqueWhite flex justify-center px-4 py-10"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {title}
    </motion.p>
  );
};
