import React, {useState, useEffect} from 'react';
import '../resources/CSS/Content.css';
import redux from '../resources/images/redux.png';
import jake from '../resources/images/velog_logo.png';

const Content = () => {
    const [board, setBoard] = useState([]);
    useEffect(() => {
        fetch('/api/board')
        .then(response => response.json())
        .then(data => setBoard(data));
    }, []);
    
    return (
    <React.Fragment>
       {board.map(b => 
        <div className="content">
            <div className="con"><img src={jake} alt="jake" width="100%" height="100%" /></div>
            <div className="profile"><img src={jake} alt="jake" width="100%" height="100%"/></div>
            <div className="id">{b.boardWriter}</div>
            <div className="title">{b.boardName.length > 20 ? b.boardName.substr(0, 20) + '.  .  . ' : b.boardName}</div>
            <div className="date">{b.boardRegDate}</div>
            <div className="detail">{b.boardContent.length > 20 ? b.boardContent.substr(0, 20) + '. . .' : b.boardContent}</div>
        </div>
       )}
    </React.Fragment>            
        
    );
};

export default Content;