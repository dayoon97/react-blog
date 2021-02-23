import React from 'react';
import '../resources/CSS/Login.css';
import jake from '../resources/images/jake.jpg';

const Login = () => {
    return (
        <div className="Login">
            <span id="img-area">
                <img src={jake} alt="jake" width="100%" height="100%"/>
            </span>
        </div>
    );
};

export default Login;