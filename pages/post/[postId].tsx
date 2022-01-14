import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostData, PostData } from '../../lib/postsUtil';

type PostsProps = {
  post: PostData;
};

const PostId: NextPage<PostsProps> = ({ post }) => {
  const components = {
    img(image: any) {
      // lazy loading을 위해서 <img /> 대신 next의 <Image />를 쓸 수도 있다.
      return <Image src={image.src} alt={image.alt} width={640} height={359} />;
    },
  };

  return (
    <section>
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
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
