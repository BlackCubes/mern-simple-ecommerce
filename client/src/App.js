import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import 'react-credit-cards/es/styles-compiled.css';

import { Main } from './common/Base';

import { Navbar } from './Components';
import { Footer } from './Components/Footer';

import {
  CartPage,
  CheckoutPage,
  FormContainer,
  ProductDetailsPage,
  ProductsPage,
} from './containers';

import { CartProvider, CheckoutProvider, ProductProvider } from './providers';

function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <CheckoutProvider>
            <Navbar />
            <Main>
              <Switch>
                <Route exact path="/" render={() => <div>Homepage</div>} />
                <Route exact path="/products" component={ProductsPage} />
                <Route
                  path="/products/category/:category"
                  component={ProductsPage}
                />
                <Route exact path="/products/:id">
                  <ProductDetailsPage FormContainerComponent={FormContainer} />
                </Route>
                <Route exact path="/cart" component={CartPage} />
                <Route exact path="/checkout">
                  <CheckoutPage FormContainerComponent={FormContainer} />
                </Route>
              </Switch>
            </Main>
            <Footer />
          </CheckoutProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
