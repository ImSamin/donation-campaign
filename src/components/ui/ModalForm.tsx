"use client";
import { Button, Form, Input, Modal } from "antd";
import { AnyARecord } from "dns";
import { useState } from "react";

const { TextArea } = Input;

const initialFormData = {
  title: "",
  description: "",
  category: "",
  targetAmount: "",
  raisedAmount: "",
  image: "",
};

const MyModalForm = ({
  visible,
  onCancel,
}: {
  visible: boolean;
  onCancel: AnyARecord;
}) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(initialFormData);

  const handleOk = () => {
    form.submit();
  };

  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      open={visible}
      title="Create New Project"
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={formData}
        onValuesChange={(changedValues, allValues) => setFormData(allValues)}
      >
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Input />
        </Form.Item>

        <Form.Item label="Target Amount" name="targetAmount">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Raised Amount" name="raisedAmount">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Image" name="image">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MyModalForm;
