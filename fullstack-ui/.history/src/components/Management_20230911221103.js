// src/components/PricingAndImageUploadPage.js

import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const PricingAndImageUploadPage = () => {
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    // Send pricing data and image file to your backend
    const formData = new FormData();
    formData.append('pricing', values.pricing);
    formData.append('image', fileList[0].originFileObj);

    // Use Axios or Fetch to send the formData to the server
    // axios.post('/api/upload-pricing-and-image', formData).then((response) => { ... });

    // Reset the form and clear the uploaded file
    // form.resetFields();
    // setFileList([]);
  };

  const onFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const beforeUpload = (file) => {
    // Add custom file type and size validation here if needed
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage;
  };

  return (
    <div>
      <h2>Set Pricing and Upload Image</h2>
      <Form name="pricing-upload-form" onFinish={onFinish}>
        <Form.Item
          label="Pricing"
          name="pricing"
          rules={[
            {
              required: true,
              message: 'Please enter the pricing for your item.',
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={onFileChange}
        >
          <Upload
            beforeUpload={beforeUpload}
            fileList={fileList}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />}>Select Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Upload
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PricingAndImageUploadPage;
