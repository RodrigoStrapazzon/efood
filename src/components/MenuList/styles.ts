import styled from "styled-components";
import { breakpoints } from "../../../styles/styles";

export const ContainerMenu = styled.section`
  max-width: 1024px;
  padding-top: 56px;
  padding-bottom: 120px;
  padding-left: 170px;

  @media (max-width: ${breakpoints.desktop}) {
    overflow-y: hidden;
    margin: 0 auto;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  gap: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    margin: 0 0 0 -140px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin: 0 0 0 -140px;
  }
`;
