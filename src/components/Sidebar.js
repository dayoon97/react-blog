import React from 'react';
import {Link} from 'react-router-dom';
import '../resources/CSS/Sidebar.css';
import up from '../resources/images/trending_up.png';
import tag from '../resources/images/local_offer.png';
import mood from '../resources/images/mood.png';
import person from '../resources/images/perm_identity.png';

import SidebarItem from '../pages/SidebarItem.js';

const Sidebar = (props) => {

    let logged = '로그인';
    let logout = '로그아웃';
    
    const menus = [
        { name : "트렌딩", path : "/", img : up},
        { name : "채팅", path : "/post", img : mood},
        { name : "태그 목록", path : "/tags", img : tag},
        { name : "로그인" , path : "/login", img : person},
        { name : "마이페이지" , path : "/myPage", img : person}
    ];

    return (
        <div className="sidebar">
                <p className="Velog">Velog</p>
                <div id="search"><input type="text" className="input-side" placeholder="search"/></div>
                {menus.map((menu, index) => {
                    return (
                        <Link to={menu.path} key={index}>
                            <SidebarItem
                                menu={menu}
                            />
                        </Link>
                    );
                })}
        </div>
    );
}; 

export default Sidebar;