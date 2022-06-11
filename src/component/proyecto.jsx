import React from 'react';
import { Enlace } from './enlacesProyectos';

export const Proyecto = (props) => {
  return (
    <div id={props.id} className={props.class}>
      <Enlace direccion={props.direccion} titulo="Preguntas" />
    </div>
  );
};
