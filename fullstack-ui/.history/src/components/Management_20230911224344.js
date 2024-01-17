import { HomeFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const Management = () => {
  const navigate = 

  return(
    <div>
      <Menu 
        mode='horizontal'
        items={[
          {
            label: <HomeFilled />,
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