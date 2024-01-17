import { Menu } from "antd";

const Management = () => {
  return(
    <div style={{display:'flex', flexDirection:'row'}}>
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

function Content() {
  
}

export default Management;