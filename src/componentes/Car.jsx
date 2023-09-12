import { useState } from "react";



function Car(props){
    const [model,setModel]= useState("Ford")
    const [brand, setBrannd] = useState("Mustang");
    const [year,setYear]= useState("1964")
    const [color, setColor] = useState("red");

    
    return(
    <>
   <p>Yo soy un Car de marca {props.marca.modelo} y marca {props.marca.nombre}</p>
   {/* <p>Yo soy un Car de marca {props.marca}!</p> */}
   {/*  Ahora el props manda un objeto*/}
   <div>
         <p>Este es un {model} {color} from {year} , {brand}</p>
        </div>
   <button type="button" onClick={() => setModel("Fiat")}>Modelo</button> 
   <button type="button" onClick={() => setBrannd("Cronos")}>Brand</button> 
   <button type="button" onClick={() => setYear("2023")}>Año</button> 
   <button type="button" onClick={() => setColor("blue")}>Color</button> 
   </>)
}
// export default function sólo una sola.

export default Car;
