function Football(){
    const shoot = (event) => {
        alert(event);
    }
    return(
        <button onClick={()=> shoot("Gool!!!") }>Toma la foto</button>
    );
}
export default Football;