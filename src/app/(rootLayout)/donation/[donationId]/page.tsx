import SinglePage from "@/components/ui/SinglePage";
import { getPostDetails } from "@/utils/getPostDetails";
type Params = {
  donationId: string;
};
const DetailsPage = async ({ params }: { params: Params }) => {
  const data = await getPostDetails(params.donationId);

  return (
    <div className=" container mx-auto p-10">
      <SinglePage data={data} />
    </div>
  );
};

export default DetailsPage;
