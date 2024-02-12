import AdminSidebar from "@/components/shared/AdminSidebar";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminSidebar>{children}</AdminSidebar>
      <div className="mx-auto">
        <Toaster />
      </div>
    </div>
  );
};

export default AdminLayout;
