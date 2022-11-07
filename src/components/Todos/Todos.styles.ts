import styled from "styled-components";
import { device } from "../../utils/variables";

export const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;

  @media ${device.tablet} {
    width: 33%;
  }
`;
