import { Menu } from 'antd';

const items = [
  {
    label: 'Management Flower',
    key: 'management',
    icon: <MailOutlined />,
  },
  {
    label: 'Flower List',
    key: 'list',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Profile',
    key: 'profile',
  },
];

const Management = () => {
  return(
    <div>
      <Menu 
        mode=''
      />
    </div>
  );
};

export default Management;