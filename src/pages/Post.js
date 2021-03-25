import React, { useState, Fragment } from 'react';
import post from '../resources/CSS/post.css';

const Post = () => {
    return (
            <div className="member">
                <div id="username-page">
                    <div class="username-page-container">
                        <h1 class="title">username을 입력하세요</h1>
                        <form id="usernameForm" name="usernameForm">
                            <div class="form-group">
                                <input type="text" id="name" placeholder="Username" autocomplete="off" class="form-control" />
                            </div>
                            <div class="form-group">
                                <button type="submit" class="accent username-submit">채팅 시작하기</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="chat-page" class="hidden">
                    <div class="chat-container">
                        <div class="chat-header">
                            <h2>Spring WebSocket Chat Demo</h2>
                        </div>
                        <div class="connecting">
                            연결중...
                        </div>
                        <ul id="messageArea">

                        </ul>
                        <form id="messageForm" name="messageForm">
                            <div class="form-group">
                                <div class="input-group clearfix">
                                    <input type="text" id="message" placeholder="Type a message..." autocomplete="off" class="form-control"/>
                                    <button type="submit" class="primary">보내기</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Post;