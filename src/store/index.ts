import { configureStore } from "@reduxjs/toolkit";
import counter from "@/store/modules/counter";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import recommend from "@/views/discover/c-views/recommend/store";

const store = configureStore({
  reducer: {
    counter,
    recommend,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export const IUseSelector: TypedUseSelectorHook<RootState> = useSelector;
export const IUseDispatch: () => RootDispatch = useDispatch;
export default store;
