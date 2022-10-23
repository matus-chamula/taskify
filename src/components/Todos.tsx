import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../model";
import "./Todos.styles.css";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos = ({ todoList, setTodoList }: Props) => {
  return (
    <div className="Todos">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default Todos;
