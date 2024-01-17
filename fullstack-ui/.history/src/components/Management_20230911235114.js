import { HomeFilled } from "@ant-design/icons";
import { Menu, Space } from "antd";

const Management = () => {
  const onMenuClick = () =>{
      loh
  }

  return (
    <div>
      <Space>
        <Menu
          mode="inline"
          onClick={}
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
