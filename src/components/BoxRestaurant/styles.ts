import styled from "styled-components";
import { cores } from "../../../styles/styles";
import { TagContainer } from "../Tag/styles";

export const BoxContainer = styled.div`
  background-color: ${cores.branco};
  position: relative;
  width: 471px;
  border: 1px solid ${cores.texto};

  .note {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 8px;
  }

  .star {
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
  }

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    object-position: top;
  }

  ${TagContainer} {
    margin-right: 16px;
  }
`;
export const BoxContent = styled.div`
  width: 100%;
  padding: 8px 8px 12px 8px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TagTitle = styled.div`
  position: absolute;
  top: 16px;
  right: 2px;
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${cores.texto};
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`;
export const Descricao = styled.p`
  display: block;
  color: ${cores.texto};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  width: 100%;
  margin-bottom: 16px;
`;
