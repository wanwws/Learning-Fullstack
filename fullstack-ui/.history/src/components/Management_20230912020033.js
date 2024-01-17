import { Menu } from "antd";


const Management = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Menu
      items={[
        { label: "Home" }
      ]} 
      />
    </div>
  );
}

export default Management;