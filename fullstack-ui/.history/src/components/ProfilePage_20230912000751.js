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
