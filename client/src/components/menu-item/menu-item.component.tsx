import React from "react";
import { useNavigate } from "react-router-dom";

import { RouterMenuItemProps } from "menu-item-component-types";

import "./menu-item.styles.scss";

const MenuItem: React.FC<RouterMenuItemProps> = ({
  title,
  imageUrl,
  size,
  linkUrl,
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${linkUrl}`)} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
