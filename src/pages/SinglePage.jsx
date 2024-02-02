import * as React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SinglePage = () => {
  const navigate = useNavigate();
  const goBackPage = () => navigate(-1);
  const goHomePage = () => navigate('/blog', { replace: true, state: '100' });
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
  const [post, setPost] = useState(null);
  return (
    <div className='div'>
      <div>Single Page {id}</div>
      <div>
        {post && (
          <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </>
        )}
      </div>
      <NavLink to={`/blog/${id}/edit`}>Edit Post</NavLink>
      <button id='back' onClick={goBackPage}>
        Go Back
      </button>
      {/* Bad approach */}
      <button id='back' onClick={goHomePage}>
        Go Home
      </button>
    </div>
  );
};
