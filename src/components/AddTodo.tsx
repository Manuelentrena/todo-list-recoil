import { initialTodo } from "@/constants/initialTodo";
import { useTodo } from "@/hooks";
import { Todo } from "@/types/interface";
import { ChangeEvent, FormEvent, useState } from "react";

export function AddTodo() {
  const { addTodo } = useTodo();
  const [content, setContent] = useState<Omit<Todo, "id">>(initialTodo);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const withoutSpaces = e.target.value.trimStart();
    setContent((prev) => ({ ...prev, [e.target.id]: withoutSpaces }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ ...content, title: content.title.trimEnd() });
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
        /* style={{"width": "95%", "border": 0}} */
      />
      <input type="hidden" />
    </form>
  );
}
