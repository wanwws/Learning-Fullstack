// src/components/FlowerUploadPage.js

import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Webcam from 'react-webcam';

const Ma = () => {
  const [photo, setPhoto] = useState(null);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
  }, [webcamRef]);

  const onFinish = (values) => {
    // Send the flower photo and pricing data to your backend
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('pricing', values.pricing);

    // Use Axios or Fetch to send the formData to the server
    // axios.post('/api/upload-flower', formData).then((response) => { ... });

    // Reset the form and clear the captured photo
    // form.resetFields();
    // setPhoto(null);
  };

  return (
    <div>
      <h2>Upload Your Flower</h2>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <Button onClick={capture}>Capture Flower Photo</Button>
      {photo && <img src={photo} alt="Flower" />}
      <Form name="flower-upload-form" onFinish={onFinish}>
        <Form.Item
          label="Pricing"
          name="pricing"
          rules={[
            {
              required: true,
              message: 'Please enter the pricing for your flower.',
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Upload Flower
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FlowerUploadPage;
