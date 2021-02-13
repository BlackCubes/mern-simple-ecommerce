import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import ProductsPage from './Components/ProductsPage';

import { ProductProvider } from './providers';

function App() {
  return (
    <ProductProvider>
      <ProductsPage />
    </ProductProvider>
  );
}

export default App;
