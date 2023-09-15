import { useState } from 'react';

// simulacion llamado a Api


function MockApi() {
  
  const [contador, setContador] = useState(0);

  return (
    <div className="Colors">
      
      <>
      <p onClick={() => setContador(contador + 1)}>+</p>
      <p onClick={() => setContador(contador - 1)}>-</p>
      {/* <p onClick={() => setContador(prevContador=> prevContador -= 1)}>-</p> */}
         {/* <p onClick={() => setContador(prevContador=> prevContador += 1)}>+</p> */}
    </>
    </div>
    
  );
}

export {MockApi};
