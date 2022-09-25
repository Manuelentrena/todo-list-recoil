import { Footer, TodoTable } from "@/components";
import {
  todoActiveAtom,
  todoAtom,
  todoCompletedAtom
} from "@/context/todo-state";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";

function App() {
  const todoList = useRecoilValue(todoAtom);
  const todoActiveList = useRecoilValue(todoActiveAtom);
  const todoCompletedList = useRecoilValue(todoCompletedAtom);
  return (
    <div className="todoapp">
      <h1>todos</h1>
      <Routes>
        <Route path="/" element={<TodoTable todoList={todoList} />} />
        <Route
          path="active"
          element={<TodoTable todoList={todoActiveList} />}
        />
        <Route
          path="completed"
          element={<TodoTable todoList={todoCompletedList} />}
        />
      </Routes>
      {todoList.length > 0 && <Footer todoList={todoList} />}
    </div>
  );
}

export default App;
