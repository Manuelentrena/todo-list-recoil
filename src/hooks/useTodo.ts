import { todoAtom } from "@/context/todo-state";
import { Todo } from "@/types/interface";
import { nanoid } from "nanoid";
import { useRecoilState } from "recoil";

export function useTodo() {
  const [todos, setTodos] = useRecoilState<Todo[]>(todoAtom);

  const addTodo = (newTodo: { title: string; active: boolean; editable: boolean }) =>
    setTodos((todos) => [...todos, { ...newTodo, id: nanoid() }]);

  const deleteTodo = (id: string) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  const toggleTodo = (id: string) =>
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, active: !todo.active } : todo;
      })
    );

  const allToggleTodo: boolean = todos.reduce((prev, todo) => {
    if (prev === false) return prev;
    if (todo.active === false) {
      return false;
    }
    return prev;
  }, true);

  const markTodo = () => {
    setTodos((todos) =>
      todos.map((todo) => ({ ...todo, active: !allToggleTodo }))
    );
  };

  const editableTodo = (id: string) =>
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, editable: true } : todo;
      })
    );

  const notEditableTodo = (id: string) =>
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, editable: false } : todo;
      })
    );

  const editTitleTodo = (id: string, title: string) =>
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, title: title } : todo;
      })
    );

  return {
    addTodo,
    deleteTodo,
    toggleTodo,
    allToggleTodo,
    markTodo,
    editableTodo,
    notEditableTodo,
    editTitleTodo,
  };
}
