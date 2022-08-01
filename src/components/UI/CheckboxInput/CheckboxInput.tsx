import React, { useMemo } from 'react';
import './CheckboxInput.scss';
interface IProps {
  id: string | number;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput = ({ id, label, checked, disabled, onChange }: IProps) => {
  const changeIdToString = useMemo(() => (typeof id === 'string' ? id : id.toString()), [id]);

  return (
    <div className="checkbox-input">
      <label className="checkbox-input__label" htmlFor={changeIdToString}>
        <input
          className="checkbox-input__input"
          id={changeIdToString}
          type="checkbox"
          name={changeIdToString}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className="checkbox-input__text" data-content={label}>
          {label}
        </span>
      </label>
    </div>
  );
};
export default CheckboxInput;
