// src/components/NavigationMenu.js

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Management = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="flowers">
        <Link to="/flowers">Flowers</Link>
      </Menu.Item>
      {/* Add more menu items and their corresponding links as needed */}
    </Menu>
  );
};

export default ;
