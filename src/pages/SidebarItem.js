import React from "react";
import '../resources/CSS/menu.css';

function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <div className="menu-list">
        <span className="img-area"><img src={menu.img} alt="img" width="20px" height="20px"/></span>
        <p className="menu">{menu.name}</p><br/>
      </div>
    </div>
  );
}

export default SidebarItem;