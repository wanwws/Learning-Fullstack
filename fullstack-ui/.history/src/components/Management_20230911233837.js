import { HomeFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const Management = () => {
  const navigate = useNavigate();
  const onMenuClick = (item) => {
    navigate(`/${item.key}`)
  }

  return(
    <div>
      <Menu 
        onClick={onMenuClick}
        mode='horizontal'
        items={[
          {
            label: "Home",
            key: "home",
          },
          {
            label: 'Management Flower',
            key: 'management',
          },
          {
            label: 'Flower List',
            key: 'flower-list',
          },
          {
            label: 'Flower List',
            key: 'flower-list',
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