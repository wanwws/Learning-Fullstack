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