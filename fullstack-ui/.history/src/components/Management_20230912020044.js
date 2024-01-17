import { Menu } from "antd";


const Management = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Menu
      items={[
        { label: "Home" },
        { label: "Manageme"}
      ]} 
      />
    </div>
  );
}

export default Management;