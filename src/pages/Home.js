import React from 'react';
import '../resources/CSS/dashboard.css';
import Content from '../components/Content';
import '../resources/CSS/home.css';


const Home = () => {
    return (
        <div className="dashboard">
            <p id="post">지금 뜨는 포스트</p>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
        </div>
    );
};

export default Home;