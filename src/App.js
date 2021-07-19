import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage} />
        <Route strict exact path="/followers" component={FollowersPage} />
      </Switch>
    </div>
  );
}

export default App;
