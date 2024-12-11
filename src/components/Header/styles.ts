import styled from "styled-components";
import { breakpoints, cores } from "../../../styles/styles";
import fundo from "../../assets/image/fundo.png";

export const Content = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  text-align: center;

  @media (max-width: ${breakpoints.desktop}) {
    overflow-y: hidden;
  }

  img {
    margin-top: 64px;
    margin-bottom: 100px;
  }
`;
export const Texto = styled.p`
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  color: ${cores.texto};
  width: 700px;
  margin: 0 auto;
  padding-bottom: 40px;
  background-color: ${cores.fundo};
`;
