import { HomeFilled } from "@ant-design/icons";
import { Menu, Space } from "antd";

const Management = () => {
  const onMenuClick = (items) =>{
      console.log(items.key);
  }

  return (
    <div>
      <Space>
        <Menu
          mode="inline"
          onClick={onMenuClick}
          items={[
            {
              label: "Home",
              key: "home",
              icon: <HomeFilled />
            },
            {
              label: "Management Flower",
              key: "management",
            },
            {
              label: "Flower List",
              key: "flower-list",
            },
            {
              label: "Report",
              key: "report",
            },
            {
              label: "Profile",
              key: "profile",
            },
            {
              label: "Signout",
              key: "signout",
              danger: true
            },
          ]}
        />
      </Space>
    </div>
  );
};

export default Management;
