import styled from "styled-components";
import { cores } from "../../../styles/styles";
import { ButtonContainer, ButtonLink } from "../Button/styles";
import * as S from "../../components/Button/styles";
import iconClose from "../../assets/image/fechar2.png";

type InputGroupProps = {
  maxWidth?: string;
};

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

  h3 {
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
  .empty-text {
    font-size: 20px;
    font-weight: bold;
    line-height: 22px;
    color: ${cores.fundo};
    text-align: center;
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
    background-image: url(${iconClose});
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

export const ContainerCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-openCard {
    display: flex;
  }
`;

export const ContainerPay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-openPay {
    display: flex;
  }
`;

export const ContainerButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 344px;
  background-color: ${cores.texto};
  position: absolute;
  top: 460px;
  right: 8px;
  z-index: 1;
  border: none;
  ${S.ButtonContainer},
  ${S.ButtonLink},
  button {
    font-size: 16px;
    font-weight: 700;
    background-color: ${cores.fundo};
    color: ${cores.texto};
    border: none;
    padding: 4px 40px 4px 40px;
    width: 100%;
    cursor: pointer;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const SidebarCard = styled.aside`
  background-color: ${cores.texto};
  color: ${cores.fundo};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;
export const inputGroup = styled.div<InputGroupProps>`
  margin-bottom: calc(32px - 16px);
  max-width: ${(props) => props.maxWidth || "auto"};
  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  input {
    padding: 8px;
    border: 1px solid ${cores.branco};
    width: 100%;
    &.error {
      border: 2px solid red;
    }
  }
  .add-on {
    color: red;
  }
  #complement {
    margin-top: 8px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  label {
    display: block;
  }
`;
export const RowFlex = styled.div`
  display: flex;
  gap: 34px;
  label {
    display: block;
  }
  input {
    padding: 8px;
    border: 1px solid ${cores.branco};
  }
  #cardNumber {
    width: 228px;
  }
`;

export const ContainerConfirm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;

export const SidebarConfirm = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${cores.texto};
  color: ${cores.fundo};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  ${ButtonLink} {
    max-width: 100%;
    width: 100%;
    text-align: center;
  }
  p {
    font-size: 14px;
  }
`;
