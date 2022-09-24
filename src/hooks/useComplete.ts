import { todoAtomFamily } from "@/context/todo-state";
import { useRecoilState } from "recoil";

export function useComplete({ id }: { id: string }) {
  const [isComplete, setIsComplete] = useRecoilState(todoAtomFamily(id));

  const toggleComplete = () => setIsComplete((prevState) => !prevState);

  return {
    isComplete,
    toggleComplete,
  };
}
