import cn from "classnames";

import s from "./select.module.scss";

interface SelectProps {
  options: { title: string; value: string }[];
  onChange: Function;
  className?: string;
}

const Select: React.FC<SelectProps> = (props) => {
  const { options, onChange, className } = props;

  return (
    <select className={cn(s.select, className)} onChange={(e) => onChange(e)}>
      <option selected disabled>
        Не выбрано
      </option>
      {options.map(({ title, value }, index) => (
        <option key={`option_${index}`} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
};

export default Select;
