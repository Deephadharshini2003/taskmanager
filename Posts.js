import React from 'react';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: 'My first blog post',
      content: 'This is my first blog post!',
    },
    {
      id: 2,
      title: 'My second blog post',
      content: 'This is my second blog post!',
    },
  ];

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts