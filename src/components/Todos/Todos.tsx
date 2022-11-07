import React from "react";
import { TodoItem } from "../../components";
import { Todo } from "../../types/types";
import { TodosWrapper } from "./Todos.styles";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos = ({ todoList, setTodoList }: Props) => {
  return (
    <TodosWrapper>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </TodosWrapper>
  );
};

export default Todos;
