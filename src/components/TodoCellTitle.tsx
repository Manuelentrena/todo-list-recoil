import { useEffect, useState } from "react";

export function TodoCellTitle({
  row,
  value,
  editTitleTodo,
  notEditableTodo,
  editableTodo,
  deleteTodo,
}: any) {
  const editable = row.original.editable;
  const [newTitle, setNewTitle] = useState(value);
  const [showIconDelete, setShowIconDelete] = useState(false);

  useEffect(() => {
    setNewTitle(value);
  }, [editable]);

  return editable ? (
    <input
      id="editable"
      onChange={(e) => setNewTitle(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          notEditableTodo(row.original.id);
          editTitleTodo(row.original.id, newTitle);
        }
        if (e.key === "Escape") {
          notEditableTodo(row.original.id);
        }
      }}
      value={newTitle}
    />
  ) : (
    <div style={{ width: "100%" }}>
      <span
        id="newtodo"
        onMouseEnter={() => setShowIconDelete(true)}
        onMouseLeave={() => setShowIconDelete(false)}
        onDoubleClick={() => editableTodo(row.original.id)}
      >
        {value}
        {showIconDelete && (
          <div
            onClick={() => {
              deleteTodo(row.original.id);
            }}
          >
            X
          </div>
        )}
      </span>
    </div>
  );
}
