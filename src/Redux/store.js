import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";
import editPageReducer from "./Slices/EditPageSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, editpage: editPageReducer },
});
