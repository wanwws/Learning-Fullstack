import { Menu } from 'antd';
import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    return(
        <div style={{display: 'flex', flexDirection:'row'}}>
            <Menu
                onClick={({key}) => {
                    if(key === "signout"){

                    }else{
                        navigate
                    }
                }}
                items={[
                    { label: "Home", key:"/home"},
                    { label: "Management Flower", key:"/management"},
                    { label: "Flower List", key:"/flower"},
                    { label: "Report", key:"/report"},
                    { label: "Profile", key:"/profile"},
                    { label: "Signout", danger: true, key:"signout"},
                ]} 
            />
            <Content />
        </div>
    );
}

function Content() {
    return <div>
        <Routes>
            <Route path='/home' element={<div>Home</div>}></Route>
            <Route path='/management' element={<div>Management Flower</div>}></Route>
            <Route path='/flower' element={<div>Flower List</div>}></Route>
            <Route path='/report' element={<div>Report</div>}></Route>
            <Route path='/profile' element={<div>Profile</div>}></Route>
        </Routes>
    </div>
}

export default HomePage;