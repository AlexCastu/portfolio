import React from 'react';
import { Proyecto } from './proyecto';
import rampUpImg from '../img/proyectos/rampUp.jpg';
import cronometro from '../img/proyectos/cronometro.jpg';
import preguntas from '../img/proyectos/preguntas.jpg';
import fetch from '../img/proyectos/fetch.jpg';
export const Proyectos = () => {
  return (
    <>
      <section id='seccionProyectos'>
        <h2>Algunos proyectos</h2>
        <div id='contenedorProyectos'>
          <Proyecto
            id='rampUp'
            direccion='https://alexcastu.github.io/prueba-final-rampUp/'
            img={rampUpImg}
            titulo='Ramp Up'
            descripcion='Proyecto final del RampUp para TheBridge en el cual solo se podria HTML y CSS.'
          />
          <Proyecto
            id='preguntas'
            direccion='https://alexcastu.github.io/preguntas/'
            img={preguntas}
            titulo='Quiz'
            descripcion='Aplicacion que consume una API de preguntas y respuestas aleatorias, ademas de usar Firebase para crear nuestros proprias preguntas y la autentificacion del usuario.'
          />
          <Proyecto
            id='cronometro'
            direccion='https://alexcastu.github.io/cronometro/ '
            img={cronometro}
            titulo='Cronometro'
            descripcion='Un cronometro basico para uso del DOM y el localStorage para las diferentes sesiones.'
          />
          <Proyecto
            id='fetch'
            img={fetch}
            direccion='https://alexcastu.github.io/practicaFetch/'
            titulo='Fetch API DOG'
            descripcion='Practica para el BootCamp para el uso de Fetch y consumo de API. '
          />
        </div>
      </section>
    </>
  );
};
