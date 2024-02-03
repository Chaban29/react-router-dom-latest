import * as React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className='div'>
      <div>About Page</div>
      <ul>
        <li>
          <NavLink to='contacts'>Contacts</NavLink>
        </li>
        <li>
          <NavLink to='team'>Team</NavLink>
        </li>
      </ul>
      <div className='pages'>
        <Outlet />
      </div>
      {/* <Routes>
        <Route path='contacts' element={<div>Our Contacts</div>} />
        <Route path='team' element={<div>Our Team</div>} />
      </Routes> */}
    </div>
  );
};
