import { TodoTable, Footer, Header } from "@/components";
import { useRecoilValue } from "recoil";
import { todoAtom } from "@/context/todo-state";

function App() {
  const todoList = useRecoilValue(todoAtom);
  return (
    <div className="todoapp">
      <h1>todos</h1>
      <TodoTable todoList={todoList} />
      {todoList.length > 0 && <Footer todoList={todoList} />}
    </div>
  );
}

export default App;
