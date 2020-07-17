import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Cast from './components/Cast'
import Videos from './components/Videos'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav/>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/cast' component={Cast} />
        <Route path='/videos' component={Videos} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
