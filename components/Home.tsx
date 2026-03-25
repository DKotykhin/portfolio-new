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
      className="flex min-h-screen items-center justify-center bg-[url('/bg-mobile.avif')] pt-16 md:bg-[url('/bg-full.avif')]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-308 flex-col items-center px-4 sm:items-start md:px-8"
      >
        <motion.p
          variants={item}
          className="text-antiqueWhite mb-14 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-7xl"
        >
          {t('title')}
        </motion.p>
        <h1 className="text-antiqueWhite mb-12 text-center text-3xl leading-20 font-semibold sm:text-start sm:text-4xl md:text-5xl lg:text-7xl">
          <motion.span variants={item}>{t('line_1')}</motion.span>
          <br />
          <motion.span variants={item} className="text-orange">
            {t('line_2')}
          </motion.span>
        </h1>
        <motion.a
          variants={item}
          href="#about-me"
          className="text-orange border-orange hover:bg-orange hover:text-background inline-block cursor-pointer rounded-lg border px-6 py-3 text-center transition-colors duration-300"
        >
          <span className="text-xl font-bold sm:text-2xl">{t('button')}</span>
        </motion.a>
      </motion.div>
    </section>
  );
};
