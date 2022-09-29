import { useEffect, useReducer } from "react";
import { toDoReducer } from "./toDoReducer";

export const useTodo = () => {
  const init = () => JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, dispatch] = useReducer(toDoReducer, [], init);

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todos)),
    [todos]
  );

  const onNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (todo) => {
    const action = {
      type: "[TODO] Delete Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleToggleTodo = (todoId) => {
    const action = {
      type: "[TODO] Complete Todo",
      payload: todoId,
    };
    dispatch(action);
  };

  const pendingsTodos = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    handleDeleteTodo,
    onNewTodo,
    handleToggleTodo,
    pendingsTodos,
  };
};
