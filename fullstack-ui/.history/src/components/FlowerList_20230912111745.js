// FlowersPage.js
import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const FlowerList = () => {
  const [flowersData, setFlowersData] = useState([]); // Store flower data here

  useEffect(() => {
    // Fetch flower data from your API or other data source
    // You can use Axios, Fetch, or any other method here
    // For now, let's assume flowersData is fetched successfully

    // Sample flower data (replace with your actual flower data)
    const sampleFlowersData = [
      {
        id: 1,
        name: "Rose",
        price: "$10",
      },
      {
        id: 2,
        name: "Tulip",
        price: "$8",
      },
      // Add more flower data as needed
    ];

    setFlowersData(sampleFlowersData);
  }, []);

  return (
    <div>
      <Title level={2}>My Flowers</Title>
      {flowersData.map((flower) => (
        <Card
          key={flower.id}
          style={{ width: 300, marginBottom: 16 }}
          title={flower.name}
        >
          <Text>Price: {flower.price}</Text>
          {/* Add more flower information as needed */}
        </Card>
      ))}
    </div>
  );
};

export default FlowersPage;
