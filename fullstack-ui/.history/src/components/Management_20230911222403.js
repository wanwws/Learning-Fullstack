import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu } from 'antd';

const items = [
  {
    label: 'Management Flower',
    key: 'management',
    icon: <MailOutlined />,
  },
  {
    label: 'Flower List',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Profile',
    key: 'alipay',
  },
];

const Management = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Management;