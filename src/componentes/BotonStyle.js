import styled from "styled-components"


export const DefaultButon = styled.button`
border:none;
margin: 5px;
background-color: ${(props)=>(props.red && 'red') || 'blue'};
color: white;
`;

//Condicional-... si le paso prod y es red, lo dejo red...si le paso otro será azul
// && si no es red la propiedad que me pasa, será azul
// si le paso rojo, será rojo.
// si le paso azul será azul
// si le paso amarillo será azul

export const ExtenderButon = styled(DefaultButon)`
display: Block;
width:100vw;
`;