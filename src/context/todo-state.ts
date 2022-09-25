import { Todo } from "@/types/interface";
import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const todoAtom = atom<Todo[]>({
  key: "todoAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const todoActiveAtom = selector({
  key: "todoActiveAtom",
  get: ({ get }) => {
    const todos = get(todoAtom);
    return todos.filter((todo) => todo.active === false);
  },
});

export const todoCompletedAtom = selector({
  key: "todoCompletedAtom",
  get: ({ get }) => {
    const todos = get(todoAtom);
    return todos.filter((todo) => todo.active === true);
  },
});

