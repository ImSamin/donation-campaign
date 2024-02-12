import SinglePage from "@/components/ui/SinglePage";
import { authOptions } from "@/utils/authOptions";
import { getPostDetails } from "@/utils/getPostDetails";
import { getServerSession } from "next-auth";
type Params = {
  donationId: string;
};
const DetailsPage = async ({ params }: { params: Params }) => {
  const data = await getPostDetails(params.donationId);
  const session = await getServerSession(authOptions);

  return (
    <div className=" container mx-auto p-10">
      <SinglePage id={session?.id} data={data} />
    </div>
  );
};

export default DetailsPage;
