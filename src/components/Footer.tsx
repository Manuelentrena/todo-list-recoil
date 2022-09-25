import { useTodo } from "@/hooks";
import { Todo } from "@/types/interface";

export function Footer({ todoList }: { todoList: Todo[] }) {
  const { counterActiveTodo, AllDeleteActiveTodo, noneActiveTodo } = useTodo();
  return (
    <div className="footer">
      <strong>
        {counterActiveTodo === 1
          ? `${counterActiveTodo} item left`
          : `${counterActiveTodo} items left`}
      </strong>
      <button>Routes</button>
      <button
        onClick={AllDeleteActiveTodo}
        className={!noneActiveTodo ? "visible" : "invisible"}
      >
        Clear Completed
      </button>
    </div>
  );
}
