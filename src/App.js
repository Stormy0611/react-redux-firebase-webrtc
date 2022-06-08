import logo from './logo.svg';
import './App.css';

import rootReducer from './store/reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/fbConfig'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './components/pages/Home';
import Splash from './components/pages/Splash';
import Create from './components/pages/Create';
import Media from './components/pages/Media';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

function App() {

  window.ethereum.on("accountsChanged", accounts => {
    if (accounts.length > 0) {
      console.log('Account connected: ${accounts[0]}');
      sessionStorage['account'] = accounts[0]
    } else {
      sessionStorage['account'] = ''
      console.log("Account disconnected");
    }
  });

  return (
    <Provider store={store}>
        <BrowserRouter>
          <div className="App">
                <Routes>
                  <Route path='/' element={<Splash />} />
            <Route path='/home' element={<Home account={sessionStorage['account']}/>} />
            <Route path='/session' element={<Create account={sessionStorage['account']}/>} />
            <Route path='/broadcast' element={<Media account={sessionStorage['account']}/>} />
                       
                </Routes>
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
