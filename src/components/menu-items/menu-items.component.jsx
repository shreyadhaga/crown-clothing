import React from 'react';
import './menu-items.style.scss'
const MenuItem = ({ title, imageURL, size }) => (
    <div className={`${size} menu-item`} style={{

    }}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageURL})`
            }} />
        <div className="content">
            <h1 className="title"> {title} </h1>
            <span className='subtitle'> SHOP NOW </span>
        </div>
    </div>
);

export default MenuItem;