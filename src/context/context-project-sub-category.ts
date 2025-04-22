import { createContext, Dispatch, SetStateAction } from "react";

export const CategoryContext = createContext(0);
export const SetCategoryContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => {});
