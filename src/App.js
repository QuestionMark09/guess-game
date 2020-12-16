import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import GuessTheWord from './pages/Gamepage';
import AddWord from './pages/AddWord';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/addword' component={AddWord} />
          <Route path='/gamepage' component={GuessTheWord} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
