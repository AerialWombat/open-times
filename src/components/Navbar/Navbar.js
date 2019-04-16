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
      <NavLink to='/groups' activeClassName={styles.active}>
        Groups
      </NavLink>

      <NavLink to='/account' activeClassName={styles.active}>
        Account
      </NavLink>

      <button
        onClick={() => {
          updateLoggedIn('out');
        }}
      >
        Log Out
      </button>
    </React.Fragment>
  );

  return (
    <nav className={styles.container}>
      <NavLink className={styles.brand} to='/'>
        Brand
      </NavLink>

      <ul className={styles.navList}>
        {isLoggedIn ? userNavbar : guestNavbar}
      </ul>
    </nav>
  );
};

export default Navbar;
