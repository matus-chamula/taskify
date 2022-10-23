import React from "react";
import { Todo } from "../model";
import "./TodoItem.styles.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, todoList, setTodoList }: Props) => {
  // const handleEdit = (id: number) => {};
  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  const handleMarkDone = (id: number) => {
    setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  return (
    <div className="TodoItem">
      <span className={`TodoItem__text ${todo.isDone ? "TodoItem__text--done" : ""}`}>{todo.text}</span>
      <div>
        {/* <span
          className="TodoItem__icon"
          onClick={() => handleEdit(todo.id)}>
          <AiFillEdit />
        </span> */}
        <span
          className="TodoItem__icon"
          onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span
          className="TodoItem__icon"
          onClick={() => handleMarkDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
