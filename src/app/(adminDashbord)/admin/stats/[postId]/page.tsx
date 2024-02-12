import PieChartComponent from "@/components/ui/Chart";
import { getPostDetails } from "@/utils/getPostDetails";

const page = async ({ params }: any) => {
  const data = await getPostDetails(params.postId);
  return (
    <div>
      <PieChartComponent data={data?.data} />
    </div>
  );
};

export default page;
