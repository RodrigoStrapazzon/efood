import styled from "styled-components";
import { breakpoints, cores } from "../../../styles/styles";
import fundo from "../../assets/image/fundo.png";

export const Content = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    overflow-y: hidden;
  }

  img {
    margin-top: 64px;
    margin-bottom: 100px;
  }
`;
export const Text = styled.p`
  font-size: 36px;
  line-height: 42px;
  color: ${cores.texto};
  padding-bottom: 40px;
  background-color: ${cores.fundo};
  width: 700px;
  font-weight: 900;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    width: 350px;
  }
`;
