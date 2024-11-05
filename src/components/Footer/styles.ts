import styled from "styled-components";
import { cores } from "../../../styles/styles";

export const FooterBox = styled.div`
  width: 1366px;
  height: 298px;
  background-color: ${cores.fundo};
  padding: 40px;
  text-align: center;

  .imgEfood {
    margin-bottom: 32px;
    margin-right: 30px;
  }

  .imgLinks {
    display: flex;
    margin: 0 585px;
    gap: 8px;
    width: 200px;
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
