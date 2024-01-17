import { Menu } from "antd";


const Management = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Menu
      items={[
        { label: "Home" },
        { label: "Management Flower"},
        { label: "Flower List"},
        { label: "Report"},
        { label: "Profile"}
      ]} 
      />
    </div>
  );
}

export default Management;