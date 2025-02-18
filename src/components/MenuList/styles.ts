import styled from "styled-components";
import { breakpoints } from "../../../styles/styles";

export const ContainerMenu = styled.section`
  max-width: 1024px;
  padding-top: 56px;
  padding-bottom: 120px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0 auto;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    li {
      margin: 0 auto;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    
    li {
      margin: 0 auto;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    
    li {
      margin: 0 auto;
    }
  }
`;
