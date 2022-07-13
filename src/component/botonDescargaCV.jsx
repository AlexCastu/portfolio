import React from 'react';
import pdf from '../curriculum/AlexCastu.pdf';
import { motion } from 'framer-motion';
export const BotonDescargaCV = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      id='BotonCV'
    >
      <a
        href={pdf}
        rel='noopener noreferrer'
        download='CV-Alex Constantin Castu.pdf'
      >
        Descarga mi CV
      </a>
    </motion.button>
  );
};
