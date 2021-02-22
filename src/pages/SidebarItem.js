import React from "react";
import '../resources/CSS/menu.css';

function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <p className="menu">{menu.name}</p>
    </div>
  );
}

export default SidebarItem;