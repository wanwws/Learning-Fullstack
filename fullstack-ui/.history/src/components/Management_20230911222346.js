import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu } from 'antd';

const items = [
  {
    label: 'Management Flower',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Flower List',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    // children: [
    //   {
    //     type: 'group',
    //     label: 'Item 1',
    //     children: [
    //       {
    //         label: 'Option 1',
    //         key: 'setting:1',
    //       },
    //       {
    //         label: 'Option 2',
    //         key: 'setting:2',
    //       },
    //     ],
    //   },
    //   {
    //     type: 'group',
    //     label: 'Item 2',
    //     children: [
    //       {
    //         label: 'Option 3',
    //         key: 'setting:3',
    //       },
    //       {
    //         label: 'Option 4',
    //         key: 'setting:4',
    //       },
    //     ],
    //   },
    // ],
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