export interface FiltersState {
  column: null | "название" | "количество" | "расстояние";
  operator: null | "больше" | "меньше" | "равно";
  value: null | string;
}

export enum FiltersActionTypes {
  SELECT_COLUMN = "SELECT_COLUMN",
  SELECT_OPERATOR = "SELECT_OPERATOR",
  SET_VALUE = "SET_VALUE",
}

interface SelectColumn {
  type: FiltersActionTypes.SELECT_COLUMN;
  payload: string;
}

interface SelectOperator {
  type: FiltersActionTypes.SELECT_OPERATOR;
  payload: string;
}

interface SetValue {
  type: FiltersActionTypes.SET_VALUE;
  payload: string;
}

export type FilterAction = SelectColumn | SelectOperator | SetValue;
