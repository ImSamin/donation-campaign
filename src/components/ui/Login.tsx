"use client";
import logo from "@/assets/Logo.png";
import { Button, Form, Input, Typography } from "antd";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "./../../app/loading";

const { Title } = Typography;

const Login = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") {
    if (session && (session as any)?.role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/dashboard");
    }
    return null;
  }

  let callbackUrl: string;

  if (session) {
    if (session && (session as any)?.role === "admin") {
      callbackUrl = "/admin/dashboard";
    } else if (session && (session as any)?.role === "user") {
      callbackUrl = "/dashboard";
    }
  }
  const onFinish = (data: any) => {
    const result = signIn("donation-campaign", {
      email: data.email,
      password: data.password,
      callbackUrl: callbackUrl,
    });
  };
  if (!session) {
    return (
      <div className="p-10 mt-12 shadow-md rounded">
        <div className="flex flex-col items-center justify-center h-full">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={130}
              height={60}
              className="mb-4"
            />
          </Link>

          <Title level={2}>Sign In</Title>

          <Form onFinish={onFinish} className="w-72">
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Login
              </Button>
            </Form.Item>
          </Form>

          <p>
            Do not have an account? <Link href="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    );
  }
};

export default Login;
