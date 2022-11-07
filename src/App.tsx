import React, { useState } from "react";
import { Form } from "../src/components";
import { Todos } from "../src/components/";
import { Todo } from "./types/types";
import "./App.styles.css";

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
    <div className="App">
      <h2 className="Heading">Taskify</h2>
      <Form todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <Todos todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
