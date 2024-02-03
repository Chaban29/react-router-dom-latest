import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter/BlogFilter';

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';

  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  return (
    <div className='div'>
      <h1>Our News</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsFrom
        )
        .map((post) => (
          <NavLink id='link' key={post.id} to={`/blog/${post.id}`}>
            <li>{post.title}</li>
          </NavLink>
        ))}
      <NavLink to='/blog/new'>Create Post</NavLink>
    </div>
  );
};
