import React from "react";
import "./Form.styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ todo, setTodo, handleSubmit }: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="Form">
      <input
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
