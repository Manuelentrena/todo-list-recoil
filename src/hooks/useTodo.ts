import { todoAtom } from "@/context/todo-state";
import { Todo } from "@/types/interface";
import { nanoid } from "nanoid";
import { useSetRecoilState } from "recoil";

export function useTodo() {
  const setTodos = useSetRecoilState<Todo[]>(todoAtom);

  const addTodo = (newTodo: { title: string, active: boolean }) => 
    setTodos((todos) => [...todos,{ ...newTodo, id: nanoid() }]);

  const deleteTodo = (id: string) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  const toggleTodo = (id: string) => 
    setTodos((todos) => todos.map((todo) => {
      return todo.id === id ? { ...todo, active: !todo.active } : todo;
    }));

  return {
    addTodo,
    deleteTodo,
    toggleTodo,
  };
}
