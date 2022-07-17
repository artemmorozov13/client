import { title } from "process";
import { useDispatch } from "react-redux";
import { FiltersActionTypes } from "store/types/FiltersType";
import Input from "UI/Input/Input";
import Select from "UI/Select/Select";
import s from "./filters.module.scss";

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const handleChangeColumn = (e: Event | null) => {
    const { value } = e?.target;

    dispatch({
      type: FiltersActionTypes.SELECT_COLUMN,
      payload: value,
    });
  };
  const handleChangeOperator = (e: Event) => {
    const { value } = e?.target;

    dispatch({
      type: FiltersActionTypes.SELECT_OPERATOR,
      payload: value,
    });
  };
  const handleChangeValue = (e: Event) => {
    const { value } = e?.target;

    dispatch({
      type: FiltersActionTypes.SET_VALUE,
      payload: value,
    });
  };

  return (
    <div className={s.filters}>
      <Select
        options={[
          { title: "название", value: "name" },
          { title: "количество", value: "count" },
          { title: "расстояние", value: "distance" },
        ]}
        onChange={handleChangeColumn}
      />
      <Select
        options={[
          { title: "больше", value: "more" },
          { title: "равно", value: "equal" },
          { title: "меньше", value: "less" },
        ]}
        onChange={handleChangeOperator}
      />
      <Input label="Значение" onChange={handleChangeValue} />
    </div>
  );
};

export default Filters;
