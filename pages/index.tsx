import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <section>
      <Link href="/posts">포스트 리스트 보기</Link>
    </section>
  );
};

export default Home;
