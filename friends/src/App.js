import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends List</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
