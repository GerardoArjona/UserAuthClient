import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/layout';

import Home from './components/home';
import List from './components/user/list';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact/>,
          <Route path="/users" component={List}/>,
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
