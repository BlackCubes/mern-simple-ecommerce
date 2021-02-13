import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import ProductsPage from './Components/ProductsPage';
import ProductDetailsPage from './Components/ProductDetailsPage';

import ProductProvider from './providers/ProductProvider';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Switch>
          <Route exact path="/" render={() => <div>Homepage</div>} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/products/:id" component={ProductDetailsPage} />
        </Switch>
      </ProductProvider>
    </Router>
  );
}

export default App;
