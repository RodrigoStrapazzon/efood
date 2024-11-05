import styled from "styled-components";
import { cores } from "../../../styles/styles";

export const ContainerMenu = styled.section`
  width: 1024px;
  padding-top: 56px;
  padding-bottom: 120px;
  padding-left: 170px;
  background-color: ${cores.fundoHome};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  gap: 40px;
`;
