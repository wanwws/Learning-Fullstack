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
      <Content />
    </div>
  );
}

function Content() {
  return <div>
    <R
  </div>
}

export default Management;