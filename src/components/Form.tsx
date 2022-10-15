import React from "react";
import "./Form.styles.css";

const Form = () => {
  return (
    <form className="Form">
      <input
        type="input"
        placeholder="Create a task"
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
