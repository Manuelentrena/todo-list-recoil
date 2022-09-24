import { useComplete } from "@/hooks/useComplete";
import { useTodo } from "@/hooks/useTodo";
import { Todo } from "@/types/interface";

export default function TodoItem({ title, id }: Todo) {
  const { isComplete, toggleComplete } = useComplete({ id });
  const { deleteTodo } = useTodo();

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <button onClick={toggleComplete}>
          {isComplete ? "Not complete" : "Complete"}
        </button>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </div>
  );
}
