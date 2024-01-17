import { Menu } from 'antd';
import React from 'react'

function HomePage() {
    return(
        <div style={{display: 'flex', flexDirection:'row'}}>
            <Menu
                items={[
                    { label: "Home"},
                    { label: "Management Flower"},
                    { label: "Home"},
                    { label: "Home"},
                    { label: "Home"},
                    { label: "Home"},
                ]} 
            />
        </div>
    );
}

export default HomePage;