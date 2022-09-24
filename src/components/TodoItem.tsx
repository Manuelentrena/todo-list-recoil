import { useTodo } from "@/hooks/useTodo";
import { Todo } from "@/types/interface";

export default function TodoItem({ title, id, active }: Todo) {
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
