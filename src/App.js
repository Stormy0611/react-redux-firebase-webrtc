import logo from './logo.svg';
import './App.css';

import rootReducer from './store/reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/fbConfig'
import { Provider } from 'react-redux'
<<<<<<< Updated upstream

import Navbar from './components/layout/Navbar'
import Header from './components/layout/Header'
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Splash from './components/layout/Splash';
import Home from './components/layout/Home';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer';
>>>>>>> Stashed changes


const store = createStore(
  rootReducer,
<<<<<<< Updated upstream
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),
    reduxFirestore(firebaseConfig) // redux bindings for firestore
  )
);



function App() {
  return (
    <Provider store={store}>
      {/* <ReactReduxFirebaseProvider> */}
        <div className="App">
          <Header />
        </div>
      {/* </ReactReduxFirebaseProvider> */}
    </Provider>
=======
  applyMiddleware(thunk)
)

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <Splash delaytime={ 3000 }/>   */}
        <Routes>
          <Route exact path='/' component={Splash} />
          {/* <Route path='/home' component={Home} /> */}
        </Routes>
      </div>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
