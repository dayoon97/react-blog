import React, {useState, useEffect} from 'react';
import Content from '../components/Content';
import '../resources/CSS/home.css';


const Home = () => {
    const [message, setMessage] = useState("");
        useEffect(() => {
            fetch('/api/board')
            .then(response => response.json())
            .then(data => console.log(data))
            .then(message => {
            setMessage(message);
            console.log(message);
        });
    },[])


    return (
        <div className="dashboard">
                <p id="post">지금 뜨는 포스트 {message}</p>
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