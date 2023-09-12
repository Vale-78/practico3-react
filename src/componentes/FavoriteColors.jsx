import { useState } from 'react';




function FavoriteColors() {
  
  const [color, setColor] = useState("red");

  return (
    <div className="Colors">
      
      <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
    </div>
    
  );
}

export {FavoriteColors};