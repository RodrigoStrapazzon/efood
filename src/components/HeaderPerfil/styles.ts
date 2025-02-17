import { Link } from "react-router-dom";

import styled from "styled-components";
import { breakpoints, cores } from "../../../styles/styles";

export const ContentProfile = styled.div`
  width: 100%;
  height: 186px;
  background-color: ${cores.fundo};
  color: ${cores.texto};
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  img {
    margin-left: 25px;
  }
`;
export const TextProfile = styled.div`
  z-index: 1;

  .sombra {
    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      height: 280px;
    }
  }
`;

export const LinkProfile = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-left: 170px;
  color: ${cores.texto};
  text-decoration: none;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 13px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 4px 0 0 0;
  }
`;

export const CartProfile = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 170px;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 4px;
  }
`;

export const TitleTypeProfile = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  position: absolute;
  top: 220px;
  left: 165px;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    top: 220px;
    left: 15px;
  }
`;
export const TitleProfile = styled.h3`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branco};
  position: absolute;
  top: 395px;
  left: 165px;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    top: 395px;
    left: 15px;
  }
`;
