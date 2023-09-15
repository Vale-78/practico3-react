import styled from "stiled-components"


export  const DefaultButon = styled.button`
background-color: ${(props)=>(props.red && 'red') || 'blue'};
color: red;
background-color: green
`;


