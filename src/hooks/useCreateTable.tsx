import { AddTodo, TodoCellTitle } from "@/components";
import { ActionsTodo, Todo } from "@/types/interface";
import { useMemo } from "react";
import { Column, useTable } from "react-table";

export function useCreateTable(todoList: Todo[], actionsTodo: ActionsTodo) {
  const columns = useMemo<Column<Todo>[]>(
    () => [
      {
        Header: () => {
          if (todoList.length > 0) {
            return (
              <input
                type="checkbox"
                checked={actionsTodo.allToggleTodo}
                onChange={() => {
                  actionsTodo.markTodo();
                }}
              />
            );
          } else {
            return null;
          }
        },
        accessor: "active",
        Cell: ({ value, row }) => {
          const id = row.original.id;
          return (
            <input
              type="checkbox"
              checked={value}
              onChange={() => actionsTodo.toggleTodo(id)}
            />
          );
        },
      },
      {
        Header: <AddTodo />,
        accessor: "title",
        Cell: ({ value, row }) => (
          <TodoCellTitle
            key={row.original.id}
            value={value}
            row={row}
            editTitleTodo={actionsTodo.editTitleTodo}
            notEditableTodo={actionsTodo.notEditableTodo}
            editableTodo={actionsTodo.editableTodo}
            deleteTodo={actionsTodo.deleteTodo}
          />
        ),
      },
    ],
    [actionsTodo.allToggleTodo]
  );
  const tableInstance = useTable({ columns, data: todoList });

  return {
    tableInstance,
  };
}
