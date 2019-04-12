import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <a>Logo</a>
      <ul className={styles.navList}>
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
        <li>
          <NavLink to='/users/secret' activeClassName={styles.active}>
            SECRET
          </NavLink>
        </li>
        <li>
          <NavLink>Groups</NavLink>
        </li>
        <li>
          <NavLink>Account</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
