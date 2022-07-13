import { InfoPersonal } from './component/info_personal';
import { Proyectos } from './component/proyectos';
import { Header } from './component/headerResponsive/Header.jsx';
import './css/header.css';
import Footer from './component/footer';

function App() {
  return (
    <div id='wrapper'>
      <Header data-aos='fade-up'></Header>
      <InfoPersonal data-aos='fade-up' />
      <Proyectos data-aos='fade-up' />
      <Footer data-aos='fade-up'></Footer>
    </div>
  );
}

export default App;
