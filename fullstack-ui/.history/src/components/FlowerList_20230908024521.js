// src/components/Profile.js

import React, { useEffect, useState } from 'react';
import { Card, List, Avatar } from 'antd';

const DataList = () => {
  const [userData, setUserData] = useState({});
  const [flowersData, setFlowersData] = useState([]);

  useEffect(() => {
    // Fetch user profile information and their flowers with pricing from the server
    // Update the 'userData' and 'flowersData' state with the fetched data
  }, []);

  return (
    <div>
      <Card title="User Profile">
        {/* Display user information */}
        <p>Citizen ID: {userData.citizenID}</p>
        <p>Name: {userData.name}</p>
        <p>Last Name: {userData.lastName}</p>
        {/* Add other user information fields as needed */}

        <Card title="Uploaded Flowers">
          <List
            dataSource={flowersData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.photoUrl} />}
                  title={item.name}
                  description={`Price: $${item.pricing}`}
                />
              </List.Item>
            )}
          />
        </Card>
      </Card>
    </div>
  );
};

export default DataList;
