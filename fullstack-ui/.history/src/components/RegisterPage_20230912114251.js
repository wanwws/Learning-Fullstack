import React from "react";
import { Button, Form, Input, message } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const RegisterPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    // Handle form submission, e.g., send data to the server
    console.log(values);
    fetch("http://localhost:3333/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values), // Send username and password
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        message.success("Re success");
        window.location = '/login'
      } else {
        alert("register faile");
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });
  };

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Register</h2>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="FirstName"
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your firstname",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="LastName"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please input your lastname",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Citizen ID"
          name="citizen_id"
          rules={[
            {
              required: true,
              message: "Please input your citizen id",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid e-mail",
            },
            {
              required: true,
              message: "Please input your e-mail",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="mobile"
          label="Mobile"
          rules={[
            {
              required: true,
              message: "Please input your mobile",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default RegisterPage;
