import React from 'react';

export const Proyecto = (props) => {
  return (
    <div id={props.id} className='proyecto'>
      <div className='imagenProyecto'>
        <img src={props.img} alt='' width='100%' />
      </div>

      <div className='divDescripcionProyecto'>
        <h3>{props.titulo}</h3>
        <p>{props.descripcion}</p>
      </div>
    </div>
  );
};
