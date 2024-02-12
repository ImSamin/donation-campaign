"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <AntdRegistry>{children}</AntdRegistry>
    </SessionProvider>
  );
};

export default Providers;
