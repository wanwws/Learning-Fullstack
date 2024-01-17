import { Menu } from 'antd';

const Management = () => {
  return(
    <div>
      <Menu 
        items={[
          {
            label: 'Management Flower',
            key: 'management',
          },
          {
            label: 'Flower List',
            key: 'list',
            icon: <AppstoreOutlined />,
          },
          {
            label: 'Profile',
            key: 'profile',
          }
        ]}
      />
    </div>
  );
};

export default Management;