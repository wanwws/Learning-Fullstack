import { HomeFilled } from "@ant-design/icons";
import { Menu, Space } from "antd";
import Link from "antd/es/typography/Link";

const Management = () => {
  const onMenuClick = (items) =>{
      console.log(items.key);
  }

  return (
    <div>
<Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="flowers">
        <Link to="/flowers">Flowers</Link>
      </Menu.Item>
      {/* Add more menu items as needed */}
    </Menu>
    </div>
  );
};

export default Management;
