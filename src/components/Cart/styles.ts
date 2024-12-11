import styled from "styled-components";
import {  cores } from "../../../styles/styles";
import { ButtonContainer } from "../Button/styles";
import iconFechar from "../../assets/image/fechar2.png";
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
`;
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`;
export const Sidebar = styled.aside`
  background-color: ${cores.texto};
  color: ${cores.fundo};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`;
export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 52px;
  margin-bottom: 16px;
`;
export const ContainerPrices = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
export const CartItem = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 16px;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    background-color: ${cores.fundo};
    padding: 8px;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    padding: 8px 0 16px;
    margin-right: 100px;
    white-space: nowrap;
  }
  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
  }
  button {
    background-image: url(${iconFechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 76px;
    right: 8px;
    cursor: pointer;
  }
`;
export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 71%;
  height: 100px;
  background-color: ${cores.fundo};
  color: ${cores.texto};
`;
