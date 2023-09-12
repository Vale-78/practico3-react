

import './App.css';
import Football from './componentes/Football';
import Garage  from './componentes/Garage';
import {FavoriteColors} from "./componentes/FavoriteColors"
import {MockApi} from "./componentes/MockApi"



function App() {
  
  

  return (
    <div className="App">
      <header className="App-header">
       <>           
            <h1>Tareas Pendientes de Hedy Lamarr</h1>
            <img
              src="https://i.imgur.com/yXOvdOSs.jpg"
              alt="Hedy Lamarr"
              classname="photo"
            />
            
        </>
        <br/>
        <Football/>
        <Garage/>
        <FavoriteColors/>
        <MockApi/>
      </header>
        
    
    </div>
   

    
  );
}

export default App;
