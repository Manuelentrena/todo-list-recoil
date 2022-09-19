import TodoItem from "@/components/TodoItem";
import { todoAtom } from "@/context/todo-state";
import { useRecoilValue } from "recoil";

export default function TodoList() {
  const todoList = useRecoilValue(todoAtom);
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </div>
  );
}
