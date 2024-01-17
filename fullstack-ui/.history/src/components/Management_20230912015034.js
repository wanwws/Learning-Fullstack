import { Menu } from "antd";

const Management = () => {
  return(
    <div>
      <Menu 
        items={[
          {label: "Home"},
          {label: "Management Flower"},
          {label: "Flower List"},
          {label: "Report"},
          {label: "Profile"},
          {}
        ]}
      />
    </div>
  );
}

export default Management;