"use client";
import { createPost } from "@/utils/createPost";
import { Button, Form, Input, InputNumber } from "antd";

const CreatePostForm = () => {
  const onFinish = async (values: any) => {
    console.log("Submitted Post:", values);
    const { title, description, category, targetAmount, raisedAmount, image } =
      values;
    const result = await createPost({
      title,
      description,
      category,
      targetAmount,
      raisedAmount,
      image,
    });
    console.log(result);
    // You can handle the submission of the post data (values) here
  };

  return (
    <Form
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
        label="Image URL"
        name="image"
        rules={[{ required: true, message: "Please enter the image URL!" }]}
      >
        <Input />
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
