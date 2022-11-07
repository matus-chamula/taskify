import styled from "styled-components";
import { colors } from "../../utils/variables";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 48rem;
  position: relative;
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 3rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  transition: all 0.2s;
  box-shadow: inset 0 0 0.25rem #000;

  &:focus {
    box-shadow: 0 0 0.5rem 100vh rgba(0, 0, 0, 0.125);
    outline: none;
  }
`;

export const FormButton = styled.button`
  position: absolute;
  right: 0;
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  border: none;
  border-radius: 3rem;
  background-color: ${colors.blue};
  font-size: 1rem;
  color: ${colors.white};
  transition: all 0.2s;
  box-shadow: 0 0 0.5rem #000;

  &:hover {
    background-color: ${colors.grey};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 0.25rem #000;
  }
`;
