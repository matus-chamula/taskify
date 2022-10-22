import React, { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { Todo } from "./model";
import "./App.styles.css";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, {id: new Date().getTime(), text: todo, isDone: false}]);
    }
  };

  return (
    <div className="App">
      <h2 className="Heading">Taskify</h2>
      <Form
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
      />
      <Todos
        todoList={todoList}
      />
    </div>
  );
};

export default App;
