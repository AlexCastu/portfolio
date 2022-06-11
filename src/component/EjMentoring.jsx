import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export const Grafica = () => {
  const [fallecidos, setFallecidos] = useState([]);
  const [paises, setPaises] = useState([]);
  const [fecha, setFecha] = useState([]);
  const data = {
    labels: paises,
    datasets: [
      {
        label: 'Fallecidos el dia: ' + fecha + ' >5000',
        backgroundColor: 'rgb(125, 200, 252)',

        data: fallecidos,
      },
    ],
  };

  const peticionApi = async () => {
    try {
      let response = await fetch('https://covid19.secuoyas.io/api/v1/mod/eu');
      let data = await response.json();
      let paises = [];
      let fallecidos = [];
      let fecha = data.fecha;
      [...data.paises].map((pais) => {
        if (pais.casosFallecidos > 5000) {
          paises.push(pais.codigoIsoLugar);
          fallecidos.push(pais.casosFallecidos);
        }
      });
      setFallecidos(fallecidos);
      setPaises(paises);
      setFecha(fecha);
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  useEffect(() => {
    peticionApi();
  }, []);

  return (
    <div id="divGrafica">
      <h2>Mi primera grafica en react</h2>
      <div id="contenedorGrafica">
        <Bar data={data} />
      </div>
    </div>
  );
};
