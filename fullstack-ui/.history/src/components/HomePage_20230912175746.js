import { Menu } from 'antd';
import React from 'react'

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
        </div>
    );
}

function Content() {
    return <div>
        <Rout
    </div>
}

export default HomePage;