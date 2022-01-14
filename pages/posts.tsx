import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getAllPosts, PostData } from '../lib/postsUtil';
import classes from '../styles/common.module.css';

type PostsProps = {
  posts: PostData[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <div className={classes.container}>
      <ul>
        {posts.map((post) => (
          <li key={post.postId}>
            <Link
              href={'/post/' + post.postId}
            >{`${post.author} - ${post.title}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default Posts;
