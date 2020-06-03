import React, {Suspense} from 'react';
import Header from './components/Header.js';
import Home from './components/Home/Home.js';

import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer.js';
import Modal from './components/Modal.js';

function App() {
  return (
    <Suspense>
      <Header />
       <Switch>
         <Route path="/" component={Home}/>
       </Switch>
       <Footer />
       <Modal />
    </Suspense>
  );
}

export default App;
