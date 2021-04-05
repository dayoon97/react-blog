import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar.js';

import Home from "./pages/Home.js";
import Post from "./pages/Post.js";
import Tags from "./pages/Tags.js";
import NotFound from "./pages/NotFound.js";
import Profile from './pages/Profile.js';
import Login from './pages/Login.js';
import myPage from './pages/MyPage';

function App(props) {

  return (
    <div className="App">
        <BrowserRouter>
          <Sidebar/>
          <Switch>
            <Route path="/Profile" component={Profile}/>
          </Switch>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/tags" component={Tags} />
            <Route path="/login" component={Login} />
            <Route path="/myPage" component={myPage} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}
export default App;