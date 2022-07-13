import React, { useState } from 'react';
import Navbar from './NavBar';
import MenuButton from './menuButton';
import mas from '../../img/mas.png';
import menos from '../../img/menos.png';
import { motion } from 'framer-motion';

export function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div id='contenedorHeader'>
      <motion.div
        transition={{ duration: 1, delay: 0.2, type: 'spring' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 100 }}
        id='contenedorLogo'
      >
        <img src={menos} alt='' />
        <span>ACC</span>
        <img src={mas} alt='' />
      </motion.div>
      <Navbar open={open} handleClick={handleClick} />
      <MenuButton open={open} handleClick={handleClick} />
    </div>
  );
}
