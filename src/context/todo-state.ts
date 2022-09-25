import { Todo } from "@/types/interface";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const todoAtom = atom<Todo[]>({
  key: "todoAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
