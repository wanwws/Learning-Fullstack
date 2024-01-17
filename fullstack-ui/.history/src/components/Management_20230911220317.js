// src/components/FlowerUpload.js

import React, { useState } from 'react';
import { Input, Button, Upload } from 'antd';
import { CameraOutlined, UploadOutlined } from '@ant-design/icons';

const ManagementPage = () => {
  const [photo, setPhoto] = useState(null);
  const [pricing, setPricing] = useState('');

  const handlePhotoChange = (e) => {
    // Handle photo selection or capture here
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  const handleUpload = () => {
    // Handle photo upload to the server and pricing submission
    console.log('Uploading photo:', photo);
    console.log('Pricing:', pricing);
  };

  return (
    <div>
      <label htmlFor="camera-input">
        <CameraOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
        Take a Photo
      </label>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        id="camera-input"
        onChange={handlePhotoChange}
        style={{ display: 'none' }}
      />

      <div>
        <Upload
          accept="image/*"
          customRequest={() => {}}
          showUploadList={false}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Upload Photo</Button>
        </Upload>
      </div>

      <Input
        placeholder="Set Pricing"
        type="number"
        value={pricing}
        onChange={(e) => setPricing(e.target.value)}
      />

      <Button type="primary" onClick={handleUpload}>
        Upload & Set Pricing
      </Button>
    </div>
  );
};

export default ManagementPage;
