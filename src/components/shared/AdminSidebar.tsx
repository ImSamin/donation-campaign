"use client";
import logo from "@/assets/Logo.png";
import {
  DashboardOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Image from "next/image";
import Link from "next/link"; // Import Link component from Next.js
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";

const { Header, Sider, Content } = Layout;

const items = [
  {
    key: "1",
    label: "Create Admin",
    href: "/admin/create-admin",
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: "Create Post",
    href: "/admin/create-post",
    icon: <PlusCircleFilled />,
  },
  {
    key: "3",
    label: "Donation Post",
    href: "/admin/all-donation-post",
    icon: <FileTextOutlined />,
  },
  {
    key: "4",
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <DashboardOutlined />,
  },
];
type AdminSidebarProps = {
  children: ReactNode;
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();
  const getSelectedKey = () => {
    return items.find((item) => item.href === pathname)?.key || "";
  };

  return (
    <Layout className=" min-h-screen h-full">
      <Sider
        className="mb-6 rounded-md"
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
      >
        <div className="demo-logo-vertical  py-3 px-7 mx-auto">
          <Link href="/">
            <Image src={logo} alt="Donation Campaign" className="w-36 h-10 " />
          </Link>
        </div>
        <Menu
          className="py-10"
          theme="light"
          mode="inline"
          defaultSelectedKeys={[getSelectedKey()]}
          selectedKeys={[getSelectedKey()]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white sticky" style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className="h-full"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminSidebar;
