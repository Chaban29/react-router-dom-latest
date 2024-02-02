import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className='div'>
      <h1>Our News</h1>
      {posts.map((post) => (
        <NavLink id='link' key={post.id} to={`/blog/${post.id}`}>
          <li>{post.title}</li>
        </NavLink>
      ))}
      <NavLink to='/blog/new'>Create Post</NavLink>
    </div>
  );
};
