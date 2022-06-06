import logo from './logo.svg';
import './App.css';

import rootReducer from './store/reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/fbConfig'
import { Provider } from 'react-redux'

import Navbar from './components/layout/Navbar'
import Header from './components/layout/Header'


const store = createStore(
  rootReducer,
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
  );
}

export default App;
