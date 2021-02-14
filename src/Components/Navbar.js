import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
  </nav>
);

export default Navbar;
