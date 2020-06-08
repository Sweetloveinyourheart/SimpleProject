import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header.js';
import HomeContainer from './containers/HomeContainer.js';
import ShopContainer from './containers/ShopContainer.js';
import BlogContainer from './containers/BlogContainer.js';
import Footer from './components/Footer.js';
import Modal from './components/Modal.js';

function App() {
  return (
    <Suspense>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/shop" exact component={ShopContainer} />
        <Route path="/blog" exact component={BlogContainer} />
      </Switch>
      <Modal />
      <Footer />
    </Suspense>
  );
}

export default App;
