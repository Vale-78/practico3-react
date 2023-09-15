import styled from "styled-components";

const H1 = styled.h1`
color: red;
`
const Titulo2 = styled.h1`
color: blue;
`
const DefaultButon = styled.button`
background-color: red;
border:none;
padding: 10px;
color: white;
`



function AppStyles() {
 

  return (
    <div className="App">
      <H1>Prueba h1 de styled-component</H1>
      <Titulo2>Prueba h2 de styled-component</Titulo2>
      <p>Esta es una prueba de styled Components</p>
      <DefaultButon>Hacer Click-Stiled</DefaultButon>
    </div>
  );
}

export {AppStyles};
