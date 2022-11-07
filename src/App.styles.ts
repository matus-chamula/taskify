import styled from "styled-components";
import { colors, device } from "./utils/variables";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  min-height: 100vh;
  background-color: ${colors.blue};

  @media ${device.tablet} {
    padding: 0;
  }
`;

export const Heading = styled.h2`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};
  z-index: 1;

  @media ${device.tablet} {
    margin: 1.5rem 0;
    font-size: 2.5rem;
  }
`;
