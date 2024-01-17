// src/components/ProfilePage.js
;
import { UserOutlined } from '@ant-design/icons';

// ProfilePage.js
import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const ProfilePage = () => {
  const [userData, setUserData] = useState({}); // Store user data here

  useEffect(() => {
    // Fetch user data from your API or other data source
    // You can use Axios, Fetch, or any other method here
    // For now, let's assume userData is fetched successfully

    // Sample user data (replace with your actual user data)
    const sampleUserData = {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      mobile: "+1234567890",
      address: "123 Main St, City, Country",
    };

    setUserData(sampleUserData);
  }, []);

  return (
    <div>
      <Title level={2}>My Profile</Title>
      <Card style={{ width: 300 }}>
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
