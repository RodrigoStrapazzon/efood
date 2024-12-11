import styled from "styled-components";
import { breakpoints, cores } from "../../../styles/styles";

export const FooterBox = styled.div`
  max-width: 1366px;
  width: 100%;
  background-color: ${cores.fundo};
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    background-color: ${cores.fundo};
  }

  img {
    width: 10%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      width: 18%;
    }
  }

  .imgEfood {
    margin-bottom: 32px;

    @media (max-width: ${breakpoints.desktop}) {
      margin: 0 0 32px 0;
    }
  }

  .imgLinks {
    display: flex;
    gap: 8px;
    margin-bottom: 80px;

    img {
      width: 24px;
    }
  }
`;

export const Paragrafo = styled.p`
  width: 480px;
  margin: 0 auto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  color: ${cores.texto};
`;
