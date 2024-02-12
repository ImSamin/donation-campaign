import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar content={children} />
    </div>
  );
};

export default DashboardLayout;
