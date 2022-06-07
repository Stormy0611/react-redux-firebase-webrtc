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

import Home from './components/layout/Home';
import Splash from './components/layout/Splash';
import Create from './components/layout/Create';
import Media from './components/layout/Media';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <div className="App">
                <Routes>
                  <Route path='/' element={<Splash />} />
            <Route path='/home' element={<Home />} />
            <Route path='/session' element={<Create />} />
                       
                </Routes>
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
