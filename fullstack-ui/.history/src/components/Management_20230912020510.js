import { HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { Route, Routes } from "react-router-dom";

const Management = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Menu
      items={[
        { label: "Home", icon: <HomeFilled /> },
        { label: "Management Flower"},
        { label: "Flower List"},
        { label: "Report"},
        { label: "Profile"},
        { label: "Signout"},
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
      <Route path="/" element={<div>Home!!!</div>}></Route>
      <Route path="/management-flower" element={<div>Management Flower</div>}></Route>
      <Route path="/flower-list" element={<div>Flowet List</div>}></Route>
      <Route path="/report" element={<div>Report</div>}></Route>
      <Route path="/profile" element={<div>Profile</div>}></Route>
    </Routes>
  </div>
  );
}

export default Management;