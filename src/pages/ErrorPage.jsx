import * as React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='div'>
      <h2>Oops!</h2>
      <p>Page is not defined</p>
      <i>{error.statusText ?? error.message}</i>
    </div>
  );
};
