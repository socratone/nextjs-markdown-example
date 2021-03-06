import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostData = {
  postId: string;
  title: string;
  author: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), 'content/posts');

const getPostsFileNames = () => {
  const postsFileNames = fs.readdirSync(postsDirectory);
  return postsFileNames;
};

export const getPostData = (fileName: string): PostData => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    postId: fileName.substring(0, fileName.length - 3),
    title: data.title,
    author: data.author,
    content,
  };
};

export const getAllPosts = () => {
  const fileNames = getPostsFileNames();
  const datas = fileNames.map((fileName) => getPostData(fileName));
  return datas;
};
