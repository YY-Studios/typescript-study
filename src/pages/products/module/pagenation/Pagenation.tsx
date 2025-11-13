import s from './Pagenation.module.css';

const Pagenation = () => {
  return (
    <div className={s.pagenation}>
      <button className={`${s.btn} ${s.prev}`}>&lt;</button>
      <ul className={s.pages}>
        <li>
          <button className={s.btn}>1</button>
        </li>
        <li>
          <button className={s.btn}>2</button>
        </li>
        <li>
          <button className={s.btn}>3</button>
        </li>
      </ul>
      <button className={`${s.btn} ${s.next}`}>&gt;</button>
    </div>
  );
};

export default Pagenation;
