// StatisticsPage.js
import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const StatisticsPage = () => {
  const [statisticsData, setStatisticsData] = useState({}); // Store statistics data here

  useEffect(() => {
    // Fetch website statistics from your API or other data source
    // You can use Axios, Fetch, or any other method here
    // For now, let's assume statisticsData is fetched successfully

    // Sample statistics data (replace with your actual statistics data)
    const sampleStatisticsData = {
      totalVisitors: 1000,
      totalSales: 500,
      averageRating: 4.5,
    };

    setStatisticsData(sampleStatisticsData);
  }, []);

  return (
    <div>
      <Title level={2}>Website Statistics</Title>
      <Card style={{ width: 300, marginBottom: 16 }}>
        <Text>Total Visitors: {statisticsData.totalVisitors}</Text>
      </Card>
      <Card style={{ width: 300, marginBottom: 16 }}>
        <Text>Total Sales: {statisticsData.totalSales}</Text>
      </Card>
      <Card style={{ width: 300, marginBottom: 16 }}>
        <Text>Average Rating: {statisticsData.averageRating}</Text>
      </Card>
      {/* Add more statistics cards as needed */}
    </div>
  );
};

export default StatisticsPage;

