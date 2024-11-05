import styled from "styled-components";
import { cores } from "../../../styles/styles";

import { Props } from ".";

export const TagContainer = styled.div<Props>`
  background-color: ${cores.texto};
  color: ${cores.fundo};
  padding: ${(props) => (props.size === "big" ? "4px 6px" : "6px 8px")};
  font-size: ${(props) => (props.size === "big" ? "16px" : "12px")};
  font-weight: bold;
  display: inline-block;
`;
