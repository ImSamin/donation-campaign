import DonationCard from "@/components/ui/DonationCard";
import { getAllPosts } from "@/utils/getAllPosts";
import { Button } from "antd";

const DonationPage = async () => {
  const { data } = await getAllPosts();

  return (
    <div className="mx-5">
      <div className="container mx-auto p-10  ">
        <DonationCard data={data} />
      </div>
    </div>
  );
};

export default DonationPage;
