import Car from "./Car"


function Garage(){
    const modeloVar= "punto"
    const autoMarca = {name:"Ford", modelo: modeloVar};
    return(
        <>
             <h3>Qué auto tengo en mi garage?</h3>
             {/* <Car marca="Mitsubishi"/>
             <Car marca="Ford"/>
             <Car marca="Fíat"/> */}
             <Car marca={autoMarca}/>


        </>
    );
}
export default Garage;