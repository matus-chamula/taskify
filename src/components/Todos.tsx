import React from "react";
import { Todo } from "../model";

interface Props {
  todoList: Todo[];
}

const Todos = ({ todoList }: Props) => {
  return (
    <div className="class">
      <div className="todo">{todoList.map((todo) => todo.text)}</div>
    </div>
  );
};

export default Todos;
