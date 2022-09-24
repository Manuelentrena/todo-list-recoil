import { initialTodo } from "@/constants/initialTodo";
import { useTodo } from "@/hooks/useTodo";
import { Todo } from "@/types/interface";
import { ChangeEvent, FormEvent, useState } from "react";

export default function AddTodo() {
  const { addTodo } = useTodo();
  const [content, setContent] = useState<Omit<Todo, "id">>(initialTodo);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(content);
    setContent(initialTodo);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={content.title}
        id="title"
        required
        autoFocus
      />
      <input type="hidden" />
    </form>
  );
}
