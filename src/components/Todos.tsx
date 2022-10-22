import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../model";
import "./Todos.styles.css";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos = ({ todoList }: Props) => {
  return (
    <div className="Todos">
      {todoList.map((todo) => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          isDone={todo.isDone}
        />
      ))}
    </div>
  );
};

export default Todos;
