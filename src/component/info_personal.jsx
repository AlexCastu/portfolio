import React from 'react';
import { Lenguaje } from '../component/lenguajes';
import { BotonLenguaje } from './botonesContacto';
import logoPersonal from '../img/logoPersonal.png';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import email from '../img/mail.png';
import js from '../img/js.png';
import html from '../img/html5.png';
import css from '../img/css3.png';
import php from '../img/php.png';
import sql from '../img/sql.png';
import react from '../img/react.png';
import node from '../img/node.png';
import git from '../img/git.png';
import { BotonDescargaCV } from './botonDescargaCV';

export const InfoPersonal = () => {
  return (
    <>
      <section id="seccionInfo">
        <article id="articuloInformacion">
          <div id="contenedorFotoYtexto">
            <img src={logoPersonal} alt="Mi Foto" id="fotoPersonal" />
            <div>
              <h2>Alex Constantin Castu</h2>
              <p>
                Un nuevo programador con ganas de aprender todo lo necesario para llegar a ser un buen <strong>Fullstack Developer</strong> !
              </p>
              <p>
                Grado superior <strong>DAM</strong> terminado y actualmente cursando un <strong>BootCamp de FullStack</strong> !
              </p>
              <BotonDescargaCV />
            </div>
          </div>
          <div id="botonesContactar">
            <a href="https://github.com/alexCastu">
              <BotonLenguaje nombre="Github" url={github} />
            </a>
            <a href="https://www.linkedin.com/in/alex-constantin-castu-52ba5a239/">
              <BotonLenguaje nombre="Linkedin" url={linkedin} />
            </a>
            <a href="MailTo:alexcastu@gmail.com">
              <BotonLenguaje nombre="Email Contact Me!" url={email} />
            </a>
          </div>
        </article>
      </section>
      <section id="seccionHabilidades">
        <h2>Tecnologias Conocidas</h2>
        <article>
          <Lenguaje nombre="Javascript" url={js} />
          <Lenguaje nombre="Html5" url={html} />
          <Lenguaje nombre="CSS3" url={css} />
          <Lenguaje nombre="React" url={react} />
          <Lenguaje nombre="Node" url={node} />
          <Lenguaje nombre="PHP" url={php} />
          <Lenguaje nombre="SQL" url={sql} />
          <Lenguaje nombre="Git" url={git} />
        </article>
      </section>
    </>
  );
};
