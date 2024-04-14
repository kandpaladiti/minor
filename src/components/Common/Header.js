import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/dashboard">User Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/dashboard">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/admin">Admin Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
