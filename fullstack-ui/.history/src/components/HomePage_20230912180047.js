import { Menu } from 'antd';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

function HomePage() {
    return(
        <div style={{display: 'flex', flexDirection:'row'}}>
            <Menu
                items={[
                    { label: "Home"},
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
    return <div>
        <Routes>
            <Route path='/home' element={<div>Home</div>}></Route>
            <Route path='/management' element={<div>Home</div>}></Route>
            <Route path='/flower' element={<div>Home</div>}></Route>
            <Route path='/report' element={<div>Home</div>}></Route>
            <Route path='/home' element={<div>Home</div>}></Route>
        </Routes>
    </div>
}

export default HomePage;