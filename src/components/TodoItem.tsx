import React from "react";
import { Todo } from "../model";
import "./TodoItem.styles.css";

const TodoItem = ({ id, text, isDone }: Todo) => {
  return (
    <div
      key={id}
      className="Todos__item">
      {text}
    </div>
  );
};

export default TodoItem;
