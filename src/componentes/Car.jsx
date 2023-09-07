

function Car(props){
    return(
    <>
   <p>Yo soy un Car de marca {props.marca.modelo} y marca {props.marca.nombre}</p>
   {/* <p>Yo soy un Car de marca {props.marca}!</p> */}
   {/*  Ahora el props manda un objeto*/}
   
   </>)
}
// export default function sólo una sola.

export default Car;
