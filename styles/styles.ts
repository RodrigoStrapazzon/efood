import { createGlobalStyle } from "styled-components";

export const cores = {
  fundo: "#FFEBD9",
  fundoHome: "#FFF8F2",
  texto: "#E66767",
  branco: "#fff",
  preto: "#000",
};

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "425px",
};

export const EstiloGlobal = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  list-style: none;

  body {
    background-color: ${cores.fundoHome};
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }

  }
`;
