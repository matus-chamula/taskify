import React, { useRef } from "react";
import "./Form.styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ todo, setTodo, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
      className="Form">
      <input
        ref={inputRef}
        type="input"
        placeholder="Create a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="Form__Input"
      />
      <button
        type="submit"
        className="Form__Button">
        Go
      </button>
    </form>
  );
};

export default Form;
