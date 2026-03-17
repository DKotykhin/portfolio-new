'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const Home = () => {
  const t = useTranslations('HomePage');

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
      style={{ backgroundImage: "url('/bg-2.avif')" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center sm:items-start w-full max-w-300 mx-auto px-4"
      >
        <motion.p
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-14 text-antiqueWhite"
        >
          {t('title')}
        </motion.p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-center sm:text-start mb-12 text-antiqueWhite leading-20">
          <motion.span variants={item}>{t('line_1')}</motion.span>
          <br />
          <motion.span variants={item} className="text-orange">
            {t('line_2')}
          </motion.span>
        </h1>
        <motion.a
          variants={item}
          href="#about-me"
          className="inline-block text-center text-orange border border-orange px-6 py-3 rounded-lg hover:bg-orange hover:text-background transition-colors duration-300 cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-bold">{t('button')}</span>
        </motion.a>
      </motion.div>
    </section>
  );
};
