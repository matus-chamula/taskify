import React from "react";
import { Todo } from "../../types/types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { TodoItemWrapper, TodoItemText, TodoItemIcon } from "./TodoItem.styles";

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
    <TodoItemWrapper todo={todo}>
      <TodoItemText>{todo.text}</TodoItemText>
      <div>
        {/* <span
          className="TodoItem__icon"
          onClick={() => handleEdit(todo.id)}>
          <AiFillEdit />
        </span> */}
        <TodoItemIcon
          className="TodoItem__icon"
          onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </TodoItemIcon>
        <TodoItemIcon
          className="TodoItem__icon"
          onClick={() => handleMarkDone(todo.id)}>
          <MdDone />
        </TodoItemIcon>
      </div>
    </TodoItemWrapper>
  );
};

export default TodoItem;
