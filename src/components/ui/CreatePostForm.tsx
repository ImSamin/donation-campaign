"use client";
import { createPost } from "@/utils/createPost";
import { Button, Form, Input, InputNumber } from "antd";
import imageCompression from "browser-image-compression";
import { useState } from "react";
import toast from "react-hot-toast";

const CreatePostForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [form] = Form.useForm();

  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    const compressedFile = await imageCompression(file, {
      maxSizeMB: 0.048, // Specify the maximum size of the compressed image
      maxWidthOrHeight: 800, // Specify the maximum width or height of the compressed image
      useWebWorker: true, // Specify whether to use Web Workers for image compression
    });

    reader.onloadend = () => {
      setSelectedImage(reader.result as any);
    };

    if (compressedFile) {
      reader.readAsDataURL(compressedFile);
    }
  };

  const onFinish = async (values: any) => {
    const { title, description, category, targetAmount, raisedAmount } = values;
    const result = await createPost({
      title,
      description,
      category,
      targetAmount,
      raisedAmount,
      image: selectedImage,
    });
    if (result.success) {
      toast.success("Create Post successfully");
      form.resetFields();
    } else {
      toast.error("Failed");
    }
  };

  return (
    <Form
      form={form}
      name="createPostForm"
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter the title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please enter the description!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please enter the category!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Target Amount"
        name="targetAmount"
        rules={[
          {
            required: true,
            type: "number",
            min: 1,
            message: "Please enter a valid target amount!",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Raised Amount"
        name="raisedAmount"
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
            message: "Please enter a valid raised amount!",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Image Upload"
        name="image"
        rules={[{ required: true, message: "Please upload an image!" }]}
      >
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" danger htmlType="submit">
          Create Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePostForm;
