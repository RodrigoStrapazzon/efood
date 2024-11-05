import styled from "styled-components";
import { cores } from "../../../styles/styles";

export const Container = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  background-color: ${cores.fundoHome};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px 80px;
  margin-top: 80px;
  margin-bottom: 120px;
`;
