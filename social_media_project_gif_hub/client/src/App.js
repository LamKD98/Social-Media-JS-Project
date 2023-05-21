import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ProfileList from './ProfileList';
import PostList from './PostList';


function App() {
  return (

    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profiles" component={ProfileList} />
        <Route path="/posts" component={PostList} />
      </Switch>
    </Router>
  );
}

export default App;

