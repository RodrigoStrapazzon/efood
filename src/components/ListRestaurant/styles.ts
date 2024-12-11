import styled from "styled-components";
import { breakpoints, cores } from "../../../styles/styles";

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: ${cores.fundoHome};

  @media (max-width: ${breakpoints.desktop}) {
    width: 60%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px 80px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 80px auto;
    grid-template-columns: 1fr;
  }
`;
