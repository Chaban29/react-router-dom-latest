import * as React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const CreatePost = () => {
  const { signOut } = useAuth();

  const navigate = useNavigate();

  return (
    <div className='div'>
      <div>Create Post</div>
      <button onClick={() => signOut(() => navigate('/', { replace: true }))}>
        Log out
      </button>
    </div>
  );
};
