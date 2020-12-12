import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/NavBar';
import AllPosts from './Components/AllPosts';
import About from './Components/About'
import SinglePost from './Components/SinglePost';
import Home from './Components/Home'
import Projects from './Components/Projects'


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={SinglePost} path="/post/:slug" />
            <Route component={AllPosts} path="/post" />
            <Route component={Projects} path="/project" />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
