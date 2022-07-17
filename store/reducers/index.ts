import { combineReducers } from "redux";
import { FiltersReducer } from "./FiltersReducer";
import { RowReducer } from "./RowsReducer";

export const RootReducer = combineReducers({
  rows: RowReducer,
  filters: FiltersReducer,
});
export type RootState = ReturnType<typeof RootReducer>;
