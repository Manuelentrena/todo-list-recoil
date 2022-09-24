import { atom } from "recoil";
import { Todo } from "@/types/interface";

export const todoAtom = atom<Todo[]>({
  key: "todoAtom",
  default: [],
});
