import { Link } from "react-router-dom";

import styled from "styled-components";
import { breakpoints, cores } from "../../../styles/styles";

export const ContentProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 186px;
  background-color: ${cores.fundo};
  color: ${cores.texto};

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
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
    margin-top: 20px;
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
    margin-bottom: 20px;
  }
`;

export const TitleTypeProfile = styled.h2`
  position: absolute;
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  top: 220px;
  margin-left: 170px;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    top: 220px;
    margin-left: 20px;
  }
`;
export const TitleProfile = styled.h3`
  position: absolute;
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branco};
  top: 395px;
  margin-left: 170px;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    top: 395px;
    margin-left: 20px;
  }
`;
