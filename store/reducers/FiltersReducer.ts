import {
  FilterAction,
  FiltersActionTypes,
  FiltersState,
} from "store/types/FiltersType";

const initialState: FiltersState = {
  column: null,
  operator: null,
  value: null,
};

export const FiltersReducer = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case FiltersActionTypes.SELECT_COLUMN:
      return {
        column: action.payload,
        operator: state.operator,
        value: state.value,
      };
    case FiltersActionTypes.SELECT_OPERATOR:
      return {
        column: state.column,
        operator: action.payload,
        value: state.value,
      };
    case FiltersActionTypes.SET_VALUE:
      return {
        column: state.column,
        operator: state.operator,
        value: action.payload,
      };
    default:
      return state;
  }
};
