import { getDonationByUserId } from "@/utils/getDonationByuserId";
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
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

const UserTable = async () => {
  const { data } = await getDonationByUserId();
  let tableData: any = [];
  data.map((tData: any) => {
    tableData.push({
      key: tData._id,
      name: tData.userId.name,
      donationTitle: tData.postId.title,
      amount: tData.donateAmount,
      date: "2024-02-15",
    });
  });
  console.log(tableData);
  return <Table columns={columns} dataSource={tableData} pagination={false} />;
};

export default UserTable;
