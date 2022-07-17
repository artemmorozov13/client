import { Button, Skeleton } from "@mui/material";
import { useTypedSelector } from "hooks/TypedSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ApiService from "services/ApiService";

import s from "./table.module.scss";
import { RowsActionTypes, RowType } from "store/types/RowTypes";

const Table: React.FC = () => {
  const { loading, rows, offset } = useTypedSelector((state) => state.rows);
  const { column, operator, value } = useTypedSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch({
      type: RowsActionTypes.FETCH_MORE_ROWS,
    });
  };

  useEffect(() => {
    if (loading) {
      if (!value) {
        ApiService.getTableRows(offset).then((res) =>
          dispatch({
            type: RowsActionTypes.UPDATE_ROWS,
            payload: [...rows, ...res],
          })
        );
      } else if (value && offset === 0) {
        ApiService.getTableRowsByFilters(offset, column, operator, value).then(
          (res) =>
            dispatch({
              type: RowsActionTypes.UPDATE_ROWS,
              payload: res,
            })
        );
      } else if (value && offset !== 0) {
        ApiService.getTableRowsByFilters(offset, column, operator, value).then(
          (res) =>
            dispatch({
              type: RowsActionTypes.UPDATE_ROWS,
              payload: [...rows, ...res],
            })
        );
      }
    }
  }, [loading, column, operator, value]);

  useEffect(() => {
    if (value && column && operator) {
      dispatch({
        type: RowsActionTypes.FETCHING_ROWS,
      });
    }
  }, [value]);

  return (
    <div className={s.table}>
      <table>
        <thead>
          <tr>
            <th className={s.cell}>{loading ? <Skeleton /> : "Дата"}</th>
            <th className={s.cell}>{loading ? <Skeleton /> : "Название"}</th>
            <th className={s.cell}>{loading ? <Skeleton /> : "Количество"}</th>
            <th className={s.cell}>{loading ? <Skeleton /> : "Расстояние"}</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? [...Array(offset)].map((el, index) => (
                <tr key={`row${index}`}>
                  <td className={s.cell}>
                    <Skeleton />
                  </td>
                  <td className={s.cell}>
                    <Skeleton />
                  </td>
                  <td className={s.cell}>
                    <Skeleton />
                  </td>
                  <td className={s.cell}>
                    <Skeleton />
                  </td>
                </tr>
              ))
            : rows.map(({ id, date, name, count, distance }: RowType) => (
                <tr key={`row${id}`}>
                  <td className={s.cell}>{date}</td>
                  <td className={s.cell}>{name}</td>
                  <td className={s.cell}>{count}</td>
                  <td className={s.cell}>{distance}</td>
                </tr>
              ))}
        </tbody>
      </table>
      <Button onClick={loadMore} className={s.button}>
        Загрузить еще
      </Button>
    </div>
  );
};

export default Table;
