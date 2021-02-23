import React from 'react';
import '../resources/CSS/Content.css';
import redux from '../resources/images/redux.png';
import jake from '../resources/images/jake.jpg';

const Content = () => {
    return (
        <div className="content">
            <div className="con"><img src={jake} alt="jake" width="100%" height="100%" /></div>
            <div className="profile"><img src={jake} alt="jake" width="100%" height="100%"/></div>
            <div className="id">dayoon97</div>
            <div className="title">벨로그 컴포넌트</div>
            <div className="date">2021년 2월 22일 금요일. 2개의 댓글</div>
            <div className="detail">내용 첫줄</div>
        </div>
    );
};

export default Content;