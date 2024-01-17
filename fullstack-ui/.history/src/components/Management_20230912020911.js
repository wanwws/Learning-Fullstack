import { HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { Route, Routes } from "react-router-dom";

const Management = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Menu
      onClick={({key})=>{

      }}
      items={[
        { label: "Home",key:"/home", icon: <HomeFilled /> },
        { label: "Management Flower",key:"/management-flower"},
        { label: "Flower List",key:"/flower-list"},
        { label: "Report",key:"/home"},
        { label: "Profile",key:"/home"},
        { label: "Signout", danger:true,key:"/home"},
      ]} 
      />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div>
    <Routes>
      <Route path="/home" element={<div>Home!!!</div>}></Route>
      <Route path="/management-flower" element={<div>Management Flower</div>}></Route>
      <Route path="/flower-list" element={<div>Flowet List</div>}></Route>
      <Route path="/report" element={<div>Report</div>}></Route>
      <Route path="/profile" element={<div>Profile</div>}></Route>
    </Routes>
  </div>
  );
}

export default Management;