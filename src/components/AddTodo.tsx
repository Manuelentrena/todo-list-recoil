import { todoAtom } from "@/context/todo-state";
import { Todo } from "@/types/interface";
import { nanoid } from "nanoid";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function AddTodo() {
  const [content, setContent] = useState<Omit<Todo, "id">>({
    title: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const setTodos = useSetRecoilState(todoAtom);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((todos) => [...todos, { ...content, id: nanoid() }]);
  };

  return (
    <form onSubmit={addTodo}>
      <input onChange={onChange} value={content.title} id="title" required />
      <button type="submit" disabled={!content.title}>
        Add Todo
      </button>
    </form>
  );
}
