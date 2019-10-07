import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';
import Movie from './components/Movies';
import NavBar from './components/NavBar';




function App() {
  
  return (
    <main className="container">
      <br/>
      <NavBar className="navBar"/>
      <Switch>
      <Route path="/" exact component={Movie}/>
      <Route path="/movies" exact component={Movie}/>
      </Switch>
    </main>
  );
}

export default App;
