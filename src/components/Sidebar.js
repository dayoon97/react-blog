import React from 'react';
import {Link} from 'react-router-dom';
import '../resources/CSS/Sidebar.css';

import SidebarItem from '../pages/SidebarItem.js';

const Sidebar = () => {
    const menus = [
        { name : "대시보드", path : "/"},
        { name : "회원 관리", path : "/members"},
        { name : "캐시 관리", path : "/cashes"}
    ];

    return (
        <div className="sidebar">
            <p className="Velog">Velog</p>
           <input type="text" className="input-side"></input>
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