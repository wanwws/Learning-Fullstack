import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Management from './components/Management';
import FlowerList from './components/FlowerList';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signout" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/management" element={<Management />}></Route>
        <Route path="/flower-list" element={<FlowerList />}></Route>
        // src/components/ProfilePage.js

import React from 'react';
import { Typography, Card, Avatar, Button } from 'antd';

const { Title, Text } = Typography;

const ProfilePage = () => {
  return (
    <div>
      <Title level={2}>My Profile</Title>
      <Card>
        <Avatar size={100} icon="user" />
        <Title level={4}>John Doe</Title>
        <Text>Email: johndoe@example.com</Text>
        <Text>Mobile: +1 123-456-7890</Text>
        {/* Add more profile information as needed */}
        <Button type="primary">Edit Profile</Button>
      </Card>
    </div>
  );
};

export default ProfilePage;

      </Routes>
    </div>
  );
}

export default App;
