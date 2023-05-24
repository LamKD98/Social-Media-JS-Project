import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        <li style = {liStyles}>
          <Link to="/" style={linkStyles}>Home</Link>
        </li>
        <li style={liStyles}>
          <Link to="/profiles" style={linkStyles}>Profiles</Link>
        </li>
        <li style={liStyles}>
          <Link to="/posts" style={linkStyles}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
const navStyles = {
  backgroundColor: '#transparent',
  padding: '10px',
};

const ulStyles = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const liStyles = {
  margin: '0 10px',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
};

export default NavBar;
