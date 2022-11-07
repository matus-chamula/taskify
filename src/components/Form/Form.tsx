import React, { useRef } from "react";
import { StyledForm, FormInput, FormButton } from "./Form.styles";

interface Props {
  todoText: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ todoText, setTodo, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledForm
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
      className="Form">
      <FormInput
        ref={inputRef}
        type="input"
        placeholder="Create a task"
        value={todoText}
        onChange={(e) => setTodo(e.target.value)}
        className="Form__Input"
      />
      <FormButton
        type="submit"
        className="Form__Button">
        Go
      </FormButton>
    </StyledForm>
  );
};

export default Form;
