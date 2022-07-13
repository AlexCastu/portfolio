import React from 'react';
import { motion } from 'framer-motion';
import { BotonLenguaje } from './botonesContacto';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import email from '../img/mail.png';

export default function Footer() {
  return (
    <div id='footer'>
      <div id='botonesContactarFooter'>
        <motion.a
          animate={{
            background: 'white ',
            scale: [1, 1, 1, 1, 1],
            rotate: [180, 360, 360, 360, 360],
            borderRadius: ['50%', '50%', '50%', '50%', '50%'],
          }}
          href='https://github.com/alexCastu'
        >
          <BotonLenguaje nombre='Github' url={github} />
        </motion.a>
        <motion.a
          animate={{
            background: 'white ',
            scale: [1, 1, 1, 1, 1],
            rotate: [180, 360, 360, 360, 360],
            borderRadius: ['50%', '50%', '50%', '50%', '50%'],
          }}
          href='https://www.linkedin.com/in/alex-constantin-castu-52ba5a239/'
        >
          <BotonLenguaje nombre='Linkedin' url={linkedin} />
        </motion.a>
        <motion.a
          animate={{
            background: 'white ',
            scale: [1, 1, 1, 1, 1],
            rotate: [180, 360, 360, 360, 360],
            borderRadius: ['50%', '50%', '50%', '50%', '50%'],
          }}
          href='MailTo:alexcastu@gmail.com'
        >
          <BotonLenguaje nombre='Email Contact Me!' url={email} />
        </motion.a>
      </div>
      <h2 id='descripcionFooter'>
        Pagina creada integramente por Alex Constantin Castu para practicar con
        REACT y como Porfolio.
      </h2>
    </div>
  );
}
