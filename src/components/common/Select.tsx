import s from './Select.module.css';
import { useEffect, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
  order: 'recent' | 'favorite';
}

const Select = ({ options, placeholder, onChange, order }: SelectProps) => {
  const [isopen, setIsopen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  useEffect(() => {
    setSelectedValue(order);
  }, [order]);
  const handleToggle = () => {
    setIsopen(!isopen);
  };
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsopen(!isopen);
    onChange?.(value);
  };

  const selctedOption = options.find((otp) => otp.value === selectedValue);

  return (
    <div className={s.selectWrapper}>
      <button
        className={`${s.selectButton}`}
        type="button"
        onClick={handleToggle}
      >
        <span className={s.selectLabel}>
          {selctedOption ? selctedOption.label : placeholder}
        </span>
        <svg
          className={`${s.arrow} ${isopen ? s.rotated : ''}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isopen ? (
        <ul className={s.optionList}>
          {options.map((option: Option) => (
            <li
              key={option.value}
              className={`${s.option}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
