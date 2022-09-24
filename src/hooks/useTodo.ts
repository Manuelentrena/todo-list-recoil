import { nanoid } from "nanoid";
import { Todo } from "@/types/interface";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "@/context/todo-state";

export function useTodo() {
  const setTodos = useSetRecoilState<Todo[]>(todoAtom);
  

  const addTodo = (newTodo: { title: string }) => {
    setTodos((todos) => [...todos, { ...newTodo, id: nanoid() }]);
  };

  const deleteTodo = (id:string) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return {
    addTodo,
    deleteTodo,
  };
}
