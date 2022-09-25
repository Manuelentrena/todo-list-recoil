export interface Todo {
  id: string;
  title: string;
  active: boolean;
  editable: boolean;
}

export interface ActionsTodo {
  toggleTodo: (id: string) => void;
  allToggleTodo: boolean;
  markTodo: () => void;
  editableTodo: (id: string) => void;
  notEditableTodo: (id: string) => void;
  editTitleTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
}
