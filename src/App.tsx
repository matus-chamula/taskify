import React, { useState } from "react";
import { Form, Todos } from "../src/components";
import { AppWrapper, Heading } from "./App.styles";
import { Todo } from "./types/types";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (todo) {
      setTodoList([
        ...todoList,
        { id: new Date().getTime(), text: todo, isDone: false },
      ]);
      setTodo("");
    }
  };

  return (
    <AppWrapper>
      <Heading>Taskify</Heading>
      <Form todoText={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <Todos todoList={todoList} setTodoList={setTodoList} />
    </AppWrapper>
  );
};

export default App;
