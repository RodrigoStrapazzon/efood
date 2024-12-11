import { Link } from "react-router-dom";

import styled from "styled-components";
import { breakpoints, cores } from "../../../styles/styles";

export const ContentPerfil = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 186px;
  background-color: ${cores.fundo};
  color: ${cores.texto};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  img {
    margin-left: 73px;
  }
`;
export const TextoPerfil = styled.div`
  z-index: 1;

  .sombra {
    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      height: 280px;
    }
  }
`;

export const LinkPerfil = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-left: 170px;
  color: ${cores.texto};
  text-decoration: none;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 153px;
  }
`;

export const CartPerfil = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 170px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0 auto;
  }
`;

export const TituloTipoPerfil = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  position: absolute;
  top: 220px;
  left: 165px;
  z-index: 1;
`;
export const TituloPerfil = styled.h3`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branco};
  position: absolute;
  top: 395px;
  left: 165px;
  z-index: 1;
`;
