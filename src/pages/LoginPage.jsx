import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className='div'>
      <form autoComplete='off' onSubmit={handleSubmitForm}>
        <label>
          Name: <input type='text' name='username' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
