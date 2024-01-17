// src/components/UserProfile.js

import React from 'react';
import { Typography, Card, Avatar, Button, Space } from 'antd';

const { Title, Text } = Typography;

const UserProfile = () => {
  return (
    <div>
      <Title level={2}>User Profile</Title>
      <Card>
        <Space direction="vertical" align="center">
          <Avatar size={100} icon={<UserOutlined />} />
          <Title level={4}>John Doe</Title>
          <Text>Email: johndoe@example.com</Text>
          <Text>Mobile: +1 123-456-7890</Text>
          {/* Add more user profile information as needed */}
          <Button type="primary">Edit Profile</Button>
        </Space>
      </Card>
    </div>
  );
};

export default UserProfile;
