import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/Products">상품 보러가기</Link>
    </>
  );
};

export default Home;
