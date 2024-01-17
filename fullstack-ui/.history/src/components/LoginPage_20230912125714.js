import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import "./LoginPage.css";

const LoginPage = () => {
  const onFinish = (values) => {
    // Handle login logic, e.g., send login request to the server
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values), // Send username and password
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        message.success("Login success");
        window.location = '/home'
      } else {
        message.error('Login faile')
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });
  };

  return (
    <div >
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <Form name="login-form" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Not a Member ? <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
