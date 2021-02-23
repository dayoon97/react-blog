import React from 'react';
import {Link} from 'react-router-dom';
import '../resources/CSS/Sidebar.css';
import up from '../resources/images/trending_up.png';
import tag from '../resources/images/local_offer.png';
import mood from '../resources/images/mood.png';

import SidebarItem from '../pages/SidebarItem.js';

const Sidebar = () => {

    const menus = [
        { name : "트렌딩", path : "/", img : up},
        { name : "최신 포스트", path : "/post", img : mood},
        { name : "태그 목록", path : "/tags", img : tag}
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