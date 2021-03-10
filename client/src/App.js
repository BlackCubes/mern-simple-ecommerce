import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import 'react-credit-cards/es/styles-compiled.css';

import { Main } from './common/Base';

import {
  CartPage,
  CheckoutPage,
  FooterContainer,
  FormContainer,
  LoginPage,
  NavbarContainer,
  ProductDetailsPage,
  ProductsPage,
} from './containers';

import {
  AuthProvider,
  CartProvider,
  CheckoutProvider,
  ProductProvider,
} from './providers';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <CheckoutProvider>
              <NavbarContainer />
              <Main>
                <Switch>
                  <Route exact path="/" render={() => <div>Homepage</div>} />

                  <Route exact path="/products" component={ProductsPage} />
                  <Route
                    path="/products/category/:category"
                    component={ProductsPage}
                  />

                  <Route exact path="/products/:id">
                    <ProductDetailsPage
                      FormContainerComponent={FormContainer}
                    />
                  </Route>

                  <Route exact path="/cart" component={CartPage} />

                  <Route exact path="/checkout">
                    <CheckoutPage FormContainerComponent={FormContainer} />
                  </Route>

                  <Route exact path="/login">
                    <LoginPage FormContainerComponent={FormContainer} />
                  </Route>
                </Switch>
              </Main>
              <FooterContainer />
            </CheckoutProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
