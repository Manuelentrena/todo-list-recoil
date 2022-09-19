import { atom, atomFamily } from "recoil";
import { Todo } from "@/types/interface";

export const todoAtom = atom<Todo[]>({
  key: "todoAtom",
  default: [],
});

export const todoAtomFamily = atomFamily<boolean, string>({
  key: "todoAtomFamily",
  default: false,
});
