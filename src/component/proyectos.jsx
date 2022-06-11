import React from 'react';
import { Proyecto } from './proyecto';
export const Proyectos = () => {
  return (
    <>
      <section id="seccionProyectos">
        <h2>Algunos proyectos</h2>
        <div id="contenedorProyectos">
          <Proyecto id="rampUp" class="proyecto" direccion="https://alexcastu.github.io/prueba-final-rampUp/" />
          <Proyecto id="preguntas" class="proyecto" direccion="https://alexcastu.github.io/preguntas/" />
          <Proyecto id="cronometro" class="proyecto" direccion="https://alexcastu.github.io/cronometro/ " />
          <Proyecto id="fetch" class="proyecto" direccion="https://alexcastu.github.io/practicaFetch/" />
        </div>
      </section>
    </>
  );
};
