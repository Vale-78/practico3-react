import "./App.css";
import Football from "./componentes/Football";
import Garage from "./componentes/Garage";
import { FavoriteColors } from "./componentes/FavoriteColors";
import { MockApi } from "./componentes/MockApi";
import { AppStyles } from "./componentes/AppStyles";
import {DefaultButon,ExtenderButon} from './componentes/BotonStyle';
import H2 from "./componentes/TitleStyle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <H2>Practicando en react</H2>
          <img
            src="https://i.imgur.com/yXOvdOSs.jpg"
            alt="Hedy Lamarr"
            classname="photo"
          />
        </>
        <br />
        <Football />
        <Garage />
        <FavoriteColors />
        <MockApi />
        <AppStyles />
      <DefaultButon>Boton estilo</DefaultButon>
        <DefaultButon red>Boton estilo</DefaultButon>
        <DefaultButon azul>Boton estilo</DefaultButon>
        <DefaultButon amarillo>Booton estilo</DefaultButon> 
        <ExtenderButon red>Boton Extender</ExtenderButon>
      </header>
    
     
    </div>
  );
}

export default App;
