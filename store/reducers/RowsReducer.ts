import { RowsAction, RowsActionTypes, RowsState } from "store/types/RowTypes";

const initialState: RowsState = {
  loading: true,
  rows: [],
  offset: 0,
};

export const RowReducer = (state = initialState, action: RowsAction) => {
  switch (action.type) {
    case RowsActionTypes.FETCHING_ROWS:
      return {
        loading: true,
        rows: [],
        offset: 0,
      };
    case RowsActionTypes.FETCH_MORE_ROWS:
      return {
        loading: true,
        rows: state.rows,
        offset: state.offset + 5,
      };
    case RowsActionTypes.UPDATE_ROWS:
      return {
        loading: false,
        rows: action.payload,
        offset: state.offset,
      };
    default:
      return state;
  }
};
