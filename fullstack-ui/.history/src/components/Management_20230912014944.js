import { Menu } from "antd";

const Management = () => {
  return(
    <div>
      <Menu 
        items={[
          {label: "Home"},
          {label: "Management Flow"}
        ]}
      />
    </div>
  );
}

export default Management;