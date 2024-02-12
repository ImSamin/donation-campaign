import AdminSidebar from "@/components/shared/AdminSidebar";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
};

export default AdminLayout;
