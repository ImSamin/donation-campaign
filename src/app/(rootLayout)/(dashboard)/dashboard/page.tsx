import UserTable from "@/components/ui/UserTable";
import { getDonationByUserId } from "@/utils/getDonationByuserId";

const DashboardPage = async () => {
  const data = await getDonationByUserId();
  return (
    <div>
      <UserTable data={data} />
    </div>
  );
};

export default DashboardPage;
