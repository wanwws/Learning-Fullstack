// FlowerForm.js
import React, { useState } from "react";
import { Form, Input, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Management = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle form submission here (e.g., send data to the server)
    console.log("Submitted values:", values);
    message.success("Flower setup successful");
  };

  return (
    <Form
      form={form}
      name="flowerForm"
      onFinish={onFinish}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item
        label="Pricing"
        name="pricing"
        rules={[
          {
            required: true,
            message: "Please enter the pricing for the flower",
          },
        ]}
      >
        <Input placeholder="Enter pricing" />
      </Form.Item>

      <Form.Item
        label="Flower Picture"
        name="flowerPicture"
        rules={[
          {
            required: true,
            message: "Please upload a picture of the flower",
          },
        ]}
      >
        <Upload
          name="flowerPicture"
          beforeUpload={() => false} // Prevent actual file upload (handled later)
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Upload Picture</Button>
        </Upload>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FlowerForm;
