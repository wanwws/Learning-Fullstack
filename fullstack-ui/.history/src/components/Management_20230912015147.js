import { Menu } from "antd";

const Management = () => {
  return(
    <div style={{display:'flex', flexDirection:'r'}}>
      <Menu 
        items={[
          {label: "Home"},
          {label: "Management Flower"},
          {label: "Flower List"},
          {label: "Report"},
          {label: "Profile"},
          {label: "Signout"},
        ]}
      />
      <div>Content</div>
    </div>
  );
}

export default Management;