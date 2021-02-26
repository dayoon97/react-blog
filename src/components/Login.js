import React from 'react';
import '../resources/CSS/Login.css';
import jake from '../resources/images/jake.jpg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from '../pages/Profile';


const Login = () => {
    return (
        <div className="Login">
            <span id="img-area">
                <Switch>
                    <button><img src={jake} alt="jake" width="100%" height="100%"/></button>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </span>
        </div>
    );
};

export default Login;