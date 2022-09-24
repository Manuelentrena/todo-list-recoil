import AddTodo from "@/components/AddTodo";
import { Todo } from "@/types/interface";
import { useMemo, useState } from "react";
import { Column, useTable } from "react-table";

export function useCreateTable(
  todoList: Todo[],
  toggleTodo: (id: string) => void,
  allToggleTodo: boolean,
  markTodo: () => void,
  editableTodo: (id: string) => void,
  notEditableTodo: (id: string) => void,
  editTitleTodo: (id: string, title: string) => void,
) {
  const [newValue, setnewValue] = useState(false);
  const columns = useMemo<Column<Todo>[]>(
    () => [
      {
        Header: () => (
          <input
            type="checkbox"
            checked={allToggleTodo}
            onChange={() => {
              markTodo();
            }}
          />
        ),
        accessor: "active",
        Cell: ({ value, row }) => {
          const id = row.original.id;
          return (
            <input
              type="checkbox"
              checked={value}
              onChange={() => toggleTodo(id)}
            />
          );
        },
      },
      {
        Header: <AddTodo />,
        accessor: "title",
        Cell: ({ value, row }) =>
          row.original.editable ? (
            <input
              onChange={(e) => editTitleTodo(row.original.id, e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  notEditableTodo(row.original.id);
                }
              }}
              value={value}
            />
          ) : (
            <span onDoubleClick={() => editableTodo(row.original.id)}>
              {value}
            </span>
          ),
      },
    ],
    [allToggleTodo]
  );
  const tableInstance = useTable({ columns, data: todoList });

  return {
    tableInstance,
  };
}
