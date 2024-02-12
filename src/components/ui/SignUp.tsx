"use client";
import logo from "@/assets/Logo.png";
import { createUser } from "@/utils/createUser";
import { Button, Form, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const { Title } = Typography;

const SignUp = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    // console.log("Received values:", values);
    const { name, email, password } = values;
    const result = await createUser({
      name,
      email,
      password,
      role: "user",
    });
    if (result?.success) {
      toast.success("User Created Successfully");
      router.push("/login");
    } else {
      toast.error("Failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src={logo} alt="Logo" className="w-30 h-15 mb-4" />

      <Title level={2}>Sign Up</Title>

      <Form onFinish={onFinish} className="w-64">
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            placeholder="Name"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </Form.Item>

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
            htmlType="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <p>
        Already have an account? <Link href="/">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;
