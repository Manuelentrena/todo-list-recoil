import { todoAtom } from "@/context/todo-state";
import { useCreateTable } from "@/hooks/useCreateTable";
import { useTodo } from "@/hooks/useTodo";
import { useRecoilValue } from "recoil";

export default function TodoTable() {
  const todoList = useRecoilValue(todoAtom);
  const {
    toggleTodo,
    allToggleTodo,
    markTodo,
    editableTodo,
    notEditableTodo,
    editTitleTodo,
  } = useTodo();
  const { tableInstance } = useCreateTable(
    todoList,
    toggleTodo,
    allToggleTodo,
    markTodo,
    editableTodo,
    notEditableTodo,
    editTitleTodo,
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getFooterGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
