import React from 'react';

import './menu-item.styles.scss';

interface MenuItemProps {
    title: string,
    imgUrl: string,
    size: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imgUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${imgUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;