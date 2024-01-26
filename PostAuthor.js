// PostAuthor component
import React from 'react';

const PostAuthor = ({ author }) => {
  return (
    <div className="blog-post-author">By {author}</div>
  );
};

export default PostAuthor;