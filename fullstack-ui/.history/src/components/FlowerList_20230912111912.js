// FlowersPage.js
import React, { useEffect, useState } from "react";
import { Card, Typography, Col, Row } from "antd";

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
        imageUrl: "https://example.com/rose.jpg", // URL to the flower image
      },
      {
        id: 2,
        name: "Tulip",
        price: "$8",
        imageUrl: "https://example.com/tulip.jpg", // URL to the flower image
      },
      // Add more flower data as needed
    ];

    setFlowersData(sampleFlowersData);
  }, []);

  return (
    <div>
      <Title level={2}>My Flowers</Title>
      <Row gutter={16}>
        {flowersData.map((flower) => (
          <Col span={8} key={flower.id}>
            <Card
              style={{ marginBottom: 16 }}
              cover={<img alt={flower.name} src={flower.imageUrl} />}
            >
              <Title level={4}>{flower.name}</Title>
              <Text>Price: {flower.price}</Text>
              {/* Add more flower information as needed */}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FlowersPage;
