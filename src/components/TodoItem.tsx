import { todoAtom, todoAtomFamily } from "@/context/todo-state";
import { Todo } from "@/types/interface";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function TodoItem({ title, id }: Todo) {
  const [isComplete, setIsComplete] = useRecoilState(todoAtomFamily(id));
  const setTodos = useSetRecoilState(todoAtom);

  const toggleComplete = () => setIsComplete((prevState) => !prevState);

  const deleteTodo = () =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <button onClick={toggleComplete}>
          {isComplete ? "Not complete" : "Complete"}
        </button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}
