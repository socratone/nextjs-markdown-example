import type { NextPage } from 'next';
import Link from 'next/link';
import classes from '../styles/common.module.css';

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Link href="/posts">포스트 리스트 보기</Link>
    </div>
  );
};

export default Home;
