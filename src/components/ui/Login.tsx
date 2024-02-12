"use client";
import logo from "@/assets/Logo.png";
import { Button, Form, Input, Typography } from "antd";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const { Title } = Typography;

const Login = () => {
  const onFinish = (data: any) => {
    const result = signIn("donation-campaign", {
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full  ">
      <Link href="/">
        <Image src={logo} alt="Logo" className="w-30 h-15 mb-4" />
      </Link>

      <Title level={2}>Sign In</Title>

      <Form onFinish={onFinish} className="w-72">
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="Email"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Password"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            danger
            htmlType="submit"
            className="bg-blue-500 text-white items-center px-4 py-2 rounded-md w-full"
          >
            Login
          </Button>
        </Form.Item>
      </Form>

      <p>
        Do not have an account? <Link href="/signUp">Log In</Link>
      </p>
    </div>
  );
};

export default Login;
