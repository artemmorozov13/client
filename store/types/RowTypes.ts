export interface RowsState {
  total: null | number;
  loading: boolean;
  rows: any[];
  offset: number;
}

export enum RowsActionTypes {
  FETCHING_ROWS = "FETCHING_ROWS",
  FETCH_MORE_ROWS = "FETCH_MORE_ROWS",
  UPDATE_ROWS = "UPDATE_ROWS",
}

export interface RowType {
  id: number;
  date: string;
  name: string;
  count: number;
  distance: number;
}

interface FetchingRows {
  type: RowsActionTypes.FETCHING_ROWS;
}
interface FetchMoreRows {
  type: RowsActionTypes.FETCH_MORE_ROWS;
  payload: any;
}
interface UpdateRows {
  type: RowsActionTypes.UPDATE_ROWS;
  payload: Array<RowType>;
}

export type RowsAction = FetchingRows | FetchMoreRows | UpdateRows;
