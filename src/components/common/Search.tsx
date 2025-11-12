import { useState } from 'react';
import s from './Search.module.css';

interface SearchProps {
  placeholder: string;
  onKeywordChange: (keyword: string) => void;
}

// 테스트 주석
// 들어가세요
const Search = ({ placeholder, onKeywordChange }: SearchProps) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onKeywordChange(newValue);
    console.log(newValue);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`${s.searchWrapper} ${isFocused ? s.focused : ''}`}>
      <div className={s.searchIcon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="6" stroke="#9CA3AF" strokeWidth="2" />
          <path
            d="M15 15L20 20"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <input
        type="text"
        className={s.searchInput}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Search;
