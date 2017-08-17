import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { firebaseApp } from './firebase';
import history from './history';
import App from './components/App.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import reducer from './reducers';
import {loginUser} from './actions';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    //console.log("user signed in or signed up",user);
    const {email} = user;
    store.dispatch(loginUser(email))
    history.push('/app');
  }
  else{
    //console.log("user has signed out or still needs to sign in");
      history.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/app' component={App}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </Router>
  </Provider>
  ,document.getElementById('root')
)
