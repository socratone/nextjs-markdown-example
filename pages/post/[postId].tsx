import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostData, PostData } from '../../lib/postsUtil';

type PostsProps = {
  post: PostData;
};

const PostId: NextPage<PostsProps> = ({ post }) => {
  return (
    <section>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPosts().map((post) => ({
    params: { postId: post.postId },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postId = context.params!.postId;

  return {
    props: {
      post: getPostData(postId + '.md'),
    },
  };
};

export default PostId;
