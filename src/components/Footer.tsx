import { useTodo } from "@/hooks";
import { Todo } from "@/types/interface";
import { NavLink } from "react-router-dom";

export function Footer({ todoList }: { todoList: Todo[] }) {
  const { counterActiveTodo, AllDeleteActiveTodo, noneActiveTodo } = useTodo();
  return (
    <div className="footer">
      <strong>
        {counterActiveTodo === 1
          ? `${counterActiveTodo} item left`
          : `${counterActiveTodo} items left`}
      </strong>
      <div className="routes">
        <NavLink to="/" end>
          <span>All</span>
        </NavLink>
        <NavLink to="/active" end>
          <span>Active</span>
        </NavLink>
        <NavLink to="/completed" end>
          <span>Completed</span>
        </NavLink>
      </div>
      <button
        onClick={AllDeleteActiveTodo}
        className={!noneActiveTodo ? "visible" : "invisible"}
      >
        Clear Completed
      </button>
    </div>
  );
}
