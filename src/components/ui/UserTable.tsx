"use client";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Donation Title",
    dataIndex: "donationTitle",
    key: "donationTitle",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];

const UserTable = ({ data }: any) => {
  let tableData: any = [];
  data?.data?.map((tData: any) => {
    tableData.push({
      key: tData?._id,
      name: tData?.userId.name,
      donationTitle: tData.postId?.title,
      amount: tData?.donateAmount,
    });
  });
  return <Table columns={columns} dataSource={tableData} pagination={false} />;
};

export default UserTable;
