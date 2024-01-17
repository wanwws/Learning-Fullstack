import { HomeFilled } from "@ant-design/icons";
import { Menu, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Management = () => {
  return (
    <div>
      <Space>
        <Menu
          mode="inline"
          items={[
            {
              label: "Home",
              key: "home",
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
            },
          ]}
        />
      </Space>
    </div>
  );
};

export default Management;
