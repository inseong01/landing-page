import { createContext, type ActionDispatch } from "react";

import { initOpponentState } from "../../util/const";

import { initVisitorAppState, type InitVisitorAppState } from "./reducer";

export const OpponentStateContext = createContext(initOpponentState);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VisitorDispatchContext = ActionDispatch<[action: any]>;
export const VisitorDispatchContext = createContext<
  VisitorDispatchContext | undefined
>(undefined);

type VisitorReducerStateContext = InitVisitorAppState;
export const VisitorReducerStateContext =
  createContext<VisitorReducerStateContext>(initVisitorAppState);
