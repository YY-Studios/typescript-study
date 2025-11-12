import s from './Filter.module.css';
import Button from '@/components/common/Button';
import Search from '@/components/common/Search';
import Select from '@/components/common/Select';

const selectOptnios = [
  { value: 'recent', label: '최신순' },
  { value: 'favorite', label: '좋아요순' },
];

interface FilterProps {
  onOrderChange: (order: string) => void;
  order: 'recent' | 'favorite';
  onKeywordChange: (keyword: string) => void;
}

const Filter = ({ onOrderChange, onKeywordChange, order }: FilterProps) => {
  return (
    <div className={s.filter}>
      <Search
        placeholder="검색어를 입력하세요"
        onKeywordChange={onKeywordChange}
      ></Search>
      <Button>상품 등록하기</Button>
      <Select
        options={selectOptnios}
        placeholder={'최신순'}
        onChange={onOrderChange}
        order={order}
      ></Select>
    </div>
  );
};

export default Filter;
