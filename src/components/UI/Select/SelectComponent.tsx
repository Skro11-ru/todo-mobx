import React from 'react';
import './SelectComponent.scss';

interface ISelectItemProps {
  name: string;
  value: string;
}
interface IProps {
  options: ISelectItemProps[];
  defaultValue: string;
  value: string;
  onChange: (e: string) => void;
}
const SelectComponent = ({ options, defaultValue, value, onChange }: IProps) => (
  <select className="select" value={value} onChange={(event) => onChange(event.target.value)}>
    <option disabled value="value">
      {defaultValue}
    </option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);

export default SelectComponent;
