import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib/Providers";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import { Toaster } from "react-hot-toast";

const withRootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <Providers>
      <div className="bg-white">
        <Navbar session={session ? true : false} content={children} />
        <div className="mx-auto">
          <Toaster />
        </div>
      </div>
    </Providers>
  );
};

export default withRootLayout;
