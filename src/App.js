import React, { useEffect } from 'react';
import './App.css';
import Header from './boxes/Header/Header';
import { BrowserRouter as Router,
 Redirect, Switch,Routes, Route} from 'react-router-dom';
import StackOverflow from './boxes/StackOverflow';
import Question from './boxes/AddQuestion/Question';
import ViewQuestion from './boxes/ViewQuestion';
import  Auth  from './boxes/Auth';
import {auth} from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import{login,logout,selectUser} from './features/userSlice'


function App() {
 const user = useSelector(selectUser);
const dispatch= useDispatch();


useEffect(()=>{
   auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch(
        login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email,
        })
      );
    } else {
      dispatch(logout());
    }
    // console.log(authUser);
  })
}
, [dispatch])





const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth",
            state: {
              from: props.location,
            },
          }}
        />
      )
    }
  />
);





  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch >

<Route exact path ='/auth' component={Auth}/>
<Route exact path ='/add-question' component={Question}/>
<Route exact path ='/question' component={ViewQuestion}/>
<Route exact path ='/' component={StackOverflow}/>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
