// BlogPost component
import React from 'react';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostAuthor from './PostAuthor';
import postImage from './postImage';
const BlogPost = ({ title, content, author,imageUrl }) => {
  return (
    <article className="blog-post">
      <PostTitle title={title} />
      <PostContent content={content} />
      <PostAuthor author={author} />
      <postImage imageUrl={imageUrl}/>
    </article>
  );
};

export default BlogPost;
