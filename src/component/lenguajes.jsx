import React from 'react';

export const Lenguaje = (props) => {
  return (
    <div id="lenguajeProgramacion">
      <img src={props.url} alt={props.nombre} title={props.nombre} />
      <p>{props.nombre}</p>
    </div>
  );
};
