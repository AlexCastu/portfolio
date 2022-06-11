import React from 'react';
import Imagen from '../img/proyectos/enlaceExterno.png';

export const Enlace = (props) => {
  return (
    <div>
      <a href={props.direccion}>
        <img src={Imagen} alt={props.titulo} />
      </a>
    </div>
  );
};
