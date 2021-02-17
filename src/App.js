import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckoutPage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ProductsPage from './Components/ProductsPage';
import ProductDetailsPage from './Components/ProductDetailsPage';

import CartProvider from './providers/CartProvider';
import CheckoutProvider from './providers/CheckoutProvider';
import ProductProvider from './providers/ProductProvider';

function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <CheckoutProvider>
            <Navbar />
            <Switch>
              <Route exact path="/" render={() => <div>Homepage</div>} />
              <Route exact path="/products" component={ProductsPage} />
              <Route
                path="/products/category/:category"
                component={ProductsPage}
              />
              <Route
                exact
                path="/products/:id"
                component={ProductDetailsPage}
              />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
            </Switch>
            <Footer />
          </CheckoutProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
