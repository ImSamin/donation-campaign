"use client";
import { deletePost } from "@/utils/deletePost";
import { updatePost } from "@/utils/updatePost";
import { Button, Form, Input, Modal, Table } from "antd";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const { TextArea } = Input;

const initialFormData = {
  id: "",
  title: "",
  description: "",
  category: "",
  targetAmount: "",
  raisedAmount: "",
  image: "",
};

const { Column } = Table;
let ID: string;

interface PostData {
  _id: string;
  title: string;
  description: string;
  category: string;
  targetAmount: number;
  raisedAmount: number;

  id: string;
}

interface AdminPostTableProps {
  data: PostData[];
}

const AdminPostTable: React.FC<AdminPostTableProps> = ({ data }) => {
  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [formData, setFormData] = useState({});

  const handelOk = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = (id: string) => {
    const postData = data.find((post) => post.id === id);

    if (postData) {
      ID = id;
      setFormData({ ...postData, id });
      // console.log(ID);

      setIsModalVisible(true);
    } else {
      // console.log("Post data not found for ID:", id);
    }
  };

  const handleDelete = async (id: string) => {
    const result = await deletePost(id);
    if (result.success) {
      toast.success("Delete successfully");
    } else {
      toast.error("Failed");
    }
  };
  const onFinish = async () => {
    const values = await form.validateFields();
    console.log("Received values:", values);

    const result = await updatePost(values, ID);
    if (result.success) {
      toast.success("Update successfully");
    } else {
      toast.error("Failed");
    }
  };

  return (
    <>
      <Table dataSource={data} scroll={{ x: 700 }}>
        {/* Columns definition */}
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Category" dataIndex="category" key="category" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column
          title="Target Amount"
          dataIndex="targetAmount"
          key="targetAmount"
        />
        <Column
          title="Raised Amount"
          dataIndex="raisedAmount"
          key="raisedAmount"
        />
        <Column
          title="Statistics"
          key="id"
          dataIndex="id"
          render={(id) => (
            <>
              <Link href={`/admin/stats/${id}`}>
                <p>Stats</p>
              </Link>
            </>
          )}
        />
        <Column
          title="Edit"
          key="edit"
          dataIndex="id"
          render={(id) => (
            <>
              <Button
                type="primary"
                size="small"
                onClick={() => handleEdit(id)}
              >
                Edit
              </Button>
            </>
          )}
        />
        <Column
          title="Delete"
          key="delete"
          dataIndex="id"
          render={(id) => (
            <Button
              type="primary"
              danger
              size="small"
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          )}
        />
      </Table>

      {/* Modal component */}
      <Modal
        className="h-72  px-10"
        title=""
        open={isModalVisible}
        onOk={handelOk}
        onCancel={handleCancel}
      >
        <Form
          className=""
          form={form}
          layout="vertical"
          onFinish={onFinish}
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
          <Button type="primary" htmlType="submit" danger>
            Update
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AdminPostTable;
