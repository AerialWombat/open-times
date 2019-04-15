import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.scss';

const Navbar = ({ isLoggedIn, updateLoggedIn }) => {
  const guestNavbar = (
    <React.Fragment>
      <li>
        <NavLink to='/users/login' activeClassName={styles.active}>
          Log In
        </NavLink>
      </li>
      <li>
        <NavLink to='/users/register' activeClassName={styles.active}>
          Sign Up
        </NavLink>
      </li>
    </React.Fragment>
  );

  const userNavbar = (
    <React.Fragment>
      <li>
        <NavLink>Groups</NavLink>
      </li>
      <li>
        <NavLink>Account</NavLink>
      </li>
      <li>
        <button
          onClick={() => {
            updateLoggedIn('out');
          }}
        >
          logout
        </button>
      </li>
    </React.Fragment>
  );

  return (
    <nav className={styles.container}>
      <a>Logo</a>
      <ul className={styles.navList}>
        {isLoggedIn ? userNavbar : guestNavbar}
      </ul>
    </nav>
  );
};

export default Navbar;
