import { Menu } from "antd";

const Management = () => {
  return(
    <div>
      <Menu 
        items={[
          {label: "Home"},
          {label: "Management Flower"},
          {label: "Flower List"}
        ]}
      />
    </div>
  );
}

export default Management;