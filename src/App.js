import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { signIn } from './components/auth';
import AuthRoute from './components/AuthRoute';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';

import Sidebar from './components/Sidebar.js';
import Login from './components/Login.js';
import jake from './resources/images/jake.jpg';

import Home from "./pages/Home.js";
import Post from "./pages/Post.js";
import Tags from "./pages/Tags.js";
import NotFound from "./pages/NotFound.js";
import Profile from './pages/Profile.js';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <div className="App">
        <BrowserRouter>
          <Sidebar/>
          <Switch>
          <div className="Login">
          <Route
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
              
            )}
          </div>
            <Route path="/Profile" component={Profile}/>
          <Login/>
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}
          />
          </Switch>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/tags" component={Tags} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}
export default App;