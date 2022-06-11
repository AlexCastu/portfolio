import React from 'react';
import mas from '../img/mas.png';
import menos from '../img/menos.png';

export function Encabezado() {
  return (
    <header id="containerHeader">
      <div>
        <img src={menos} alt="" />
        <span>ACC</span>
        <img src={mas} alt="" />
      </div>
      <div>
        <ul>
          <li>
            <a href="#seccionInfo">Sobre mi</a>
          </li>
          <li>
            <a href="#seccionProyectos">Proyectos</a>
          </li>
          <li>
            <a href="#divGrafica">Practica API</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
