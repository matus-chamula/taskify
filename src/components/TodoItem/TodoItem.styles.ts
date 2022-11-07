import styled from "styled-components";
import { Todo } from "../../types/types";
import { colors } from "../../utils/variables";

interface Props {
  todo: Todo;
}

export const TodoItemWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  padding: 1rem;
  background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
  transition: all 0.2s;
  text-decoration: ${(props) => (props.todo.isDone ? "line-through" : "none")};

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const TodoItemText = styled.span`
  font-size: 1.5rem;
  color: ${colors.black};
`;

export const TodoItemIcon = styled.span`
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  &:not():last-child {
    margin-right: 1rem;
  }
`;
