import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header.js';
import HomeContainer from './containers/HomeContainer.js';
import ShopContainer from './containers/ShopContainer.js';
import BlogContainer from './containers/BlogContainer.js';
import ContactContainer from './containers/ContactContainer.js';
import DashBoard from './containers/Dashboard.js'
import Login from './components/Authentication/Login.js'
import AuthGuard from './components/Authentication/AuthGuard.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <Suspense>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/shop" exact component={ShopContainer} />
        <Route path="/blog" exact component={BlogContainer} />
        <Route path="/contact" exact component={ContactContainer} />
        <Route path="/admin/login" exact component={Login} />
        <Route path="/admin/dashboard" exact component={AuthGuard(DashBoard)} />
      </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
