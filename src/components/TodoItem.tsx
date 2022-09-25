import { useTodo } from "@/hooks";
import { Todo } from "@/types/interface";

export function TodoItem({ title, id, active }: Todo) {
  const { deleteTodo, toggleTodo } = useTodo();

  const onChange = () => toggleTodo(id);
  const onDelete = () => deleteTodo(id);

  return (
    <div>
      <h2>{title}</h2>
      <input type="checkbox" onChange={onChange} checked={active} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
