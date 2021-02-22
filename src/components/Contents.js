import React from 'react';
import '../resources/CSS/Contents.css';

function Contents ({ menu }){
    return(
        <div className="Contents">
            <p> {menu.name} </p>
        </div>
    );
};

export default Contents;