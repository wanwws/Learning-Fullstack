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
    
  );
};

export default Management;
