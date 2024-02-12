"use client";
import { createAdmin } from "@/utils/createAdmin";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";

const CreateAdminForm = () => {
  const onFinish = async (values: any) => {
    const { name, email, password } = values;
    const result = await createAdmin({
      name,
      email,
      password,
      role: "admin",
    });

    if (result.success) {
      toast.success("Create admin successfully");
    } else {
      toast.error("Failed");
    }

    console.log(result);
  };

  return (
    <Form
      name="admin-form"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" danger htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateAdminForm;
