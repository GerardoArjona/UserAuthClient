import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import Layout from './components/layout';

import Home from './components/home';
import List from './components/user/list';
import Profile from './components/user/profile';
import Signup from './components/user/signup';
import Signin from './components/user/signin';

import { isLoggedIn } from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route  {...rest} render={
      (props) => (
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/signin" />
      )
  }>
  </Route>
)

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact/>,
          <Route path="/users" component={List}/>,
          <Route path="/signup" component={Signup}/>,
          <Route path="/signin" component={Signin}/>,
          <PrivateRoute path="/profile/:username" component={Profile}/>,
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
