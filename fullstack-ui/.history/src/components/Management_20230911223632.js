import { Menu } from 'antd';

const Management = () => {
  return(
    <div>
      <Menu 
        mode='horizontal'
        items={[
          {
            label: <H
            key: 'home',
          },
          {
            label: 'Management Flower',
            key: 'management',
          },
          {
            label: 'Flower List',
            key: 'list',
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