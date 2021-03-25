import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar.js';

import Home from "./pages/Home.js";
import Post from "./pages/Post.js";
import Tags from "./pages/Tags.js";
import NotFound from "./pages/NotFound.js";
import Profile from './pages/Profile.js';
import Login from './pages/Login.js';

function App() {

          /*<Route
            path="/login"
            render={props => (
              <LoginForm authenticated={authenticated} login={login} {...props} />
            )}
          />
            {authenticated ? (
              <LogoutButton logout={logout} />
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
              
            )} */
  return (
    <div className="App">
        <BrowserRouter>
          <Sidebar/>
          <Switch>
          <div className="Login">
          
          </div>
            <Route path="/Profile" component={Profile}/>
        
          </Switch>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/tags" component={Tags} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}
export default App;