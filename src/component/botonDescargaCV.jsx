import React from 'react';
import pdf from '../curriculum/AlexCastu.pdf';

export const BotonDescargaCV = () => {
  return (
    <button id="BotonCV">
      <a href={pdf} rel="noopener noreferrer" download="CV-Alex Constantin Castu.pdf">
        Descarga mi CV
      </a>
    </button>
  );
};
