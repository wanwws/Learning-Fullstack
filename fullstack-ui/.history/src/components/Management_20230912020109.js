import { Menu } from "antd";


const Management = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Menu
      items={[
        { label: "Home" },
        { label: "Management Flower"},
        { label: "Flower List"},
        { label: ""}
      ]} 
      />
    </div>
  );
}

export default Management;