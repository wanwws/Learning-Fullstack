import { Menu } from 'antd';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

function HomePage() {
    return(
        <div style={{display: 'flex', flexDirection:'row'}}>
            <Menu
                onClick={({key}) => {

                }}
                items={[
                    { label: "Home", key:"/home"},
                    { label: "Management Flower", },
                    { label: "Flower List"},
                    { label: "Report"},
                    { label: "Profile"},
                    { label: "Signout", danger: true},
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
            <Route path='/signout' element={<div>Profile</div>}></Route>
        </Routes>
    </div>
}

export default HomePage;