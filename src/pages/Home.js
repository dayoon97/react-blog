import React from 'react';
import Content from '../components/Content';
import '../resources/CSS/home.css';


const Home = (props) => {
    console.log("props: ", props);
    return (
        <div className="dashboard">
                <p id="post">지금 뜨는 포스트 {}</p>
                <Content/>
        </div>
    );
};

export default Home;