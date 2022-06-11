import { Encabezado } from './component/encabezado';
import { InfoPersonal } from './component/info_personal';
import { Proyectos } from './component/proyectos';
import { Grafica } from './component/EjMentoring';

import './css/header.css';

function App() {
  return (
    <div id="wrapper">
      <Encabezado />
      <InfoPersonal />
      <Proyectos />
      <Grafica />
    </div>
  );
}

export default App;
