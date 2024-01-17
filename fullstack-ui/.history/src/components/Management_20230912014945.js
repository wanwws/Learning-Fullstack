import { Menu } from "antd";

const Management = () => {
  return(
    <div>
      <Menu 
        items={[
          {label: "Home"},
          {label: "Management Flower"}
        ]}
      />
    </div>
  );
}

export default Management;