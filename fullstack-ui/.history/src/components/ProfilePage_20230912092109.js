// src/components/ProfilePage.js

import React from "react";
import { Card, Avatar, Typography, Space } from "antd";

const { Title, Text } = Typography;

const ProfilePage = () => {
  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    mobile: "+1234567890",
    address: "123 Main St, City, Country",
    // Add more user data as needed
  };
  return (
    <div>
      <Title level={2}>My Profile</Title>
      <Card>
          <Avatar size={64} icon={<UserOutlined />} />
        <Title level={4}>
          {userData.firstName} {userData.lastName}
        </Title>
        <Text>Email: {userData.email}</Text>
        <Text>Mobile: {userData.mobile}</Text>
        <Text>Address: {userData.address}</Text>
        {/* Add more user information as needed */}
      </Card>
    </div>
  );
};

export default ProfilePage;
