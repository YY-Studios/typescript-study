import s from './Filter.module.css';
import Button from '@/components/common/Button';
import Search from '@/components/common/Search';
import Select from '@/components/common/Select';

const selectOptnios = [
  { value: 'recent', label: '최신순' },
  { value: 'favorite', label: '좋아요순' },
];

const Filter = () => {
  return (
    <div className={s.filter}>
      <Search placeholder="검색어를 입력하세요"></Search>
      <Button>상품 등록하기</Button>
      <Select options={selectOptnios} placeholder={'최신순'}></Select>
    </div>
  );
};

export default Filter;
