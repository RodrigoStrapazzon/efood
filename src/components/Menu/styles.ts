import styled from "styled-components";
import { breakpoints, cores } from "../../../styles/styles";

export const BoxMenu = styled.ul`
  width: 320px;
  height: 338px;
  background-color: ${cores.texto};
  padding: 8px 8px;

  img {
    width: 304px;
    height: 167px;
    margin-bottom: 8px;
    object-fit: cover;
  }
`;
export const TitleMenu = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.fundo};
  margin-bottom: 8px;
`;
export const DescriptionMenu = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.fundo};
  margin-bottom: 20px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalContent = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  background-color: ${cores.texto};
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
    flex-direction: column;
    text-align: center;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 90%;
    flex-direction: row;
  }

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    padding: 32px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-top: 5px;
      margin: 0 auto;
    }
  }
`;

export const ModalDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${cores.fundo};
  row-gap: 20px;
  padding: 32px 32px 32px 0px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 15px;
  }

  img {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    cursor: pointer;

    @media (max-width: ${breakpoints.desktop}) {
      top: -270px;
    }
    @media (min-width: ${breakpoints.tablet}) {
      top: 10px;
    }
  }

  button {
    font-size: 14px;
    font-weight: 700;
    width: 35%;
    padding: 4px;
    background-color: ${cores.fundo};
    color: ${cores.texto};
    border: none;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      white-space: nowrap;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-left: 15px;
    }
  }
`;
