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
          {label: "Si"}
        ]}
      />
    </div>
  );
}

export default Management;