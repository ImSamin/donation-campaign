"use client";
import { Layout, theme } from "antd";
import React, { useState } from "react";

const { Header, Sider, Content } = Layout;

interface SidebarProps {
  content: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ content })  => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className=" h-screen">
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
