"use client";

import logo from "@/assets/Logo.png";
import { Button, Layout, Menu, Typography, theme } from "antd";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Donation", href: "/donation" },
];
interface NavbarProps {
  content: ReactNode;
  session: boolean;
}

const Navbar = ({ content, session }: NavbarProps) => {
  const { data: session2, status } = useSession<any>();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const role = (session2 as unknown as { role: string })?.role;

  const pathname = usePathname();
  const router = useRouter();
  const dashboardLink = role === "admin" ? "/admin/dashboard" : "/dashboard";
  return (
    <Layout className="    bg-white mx-auto  h-screen">
      <Header className="flex items-center  bg-white ">
        <Content>
          <Link href="/">
            <Title className="m-0 text-2xl flex items-center">
              <Image
                className="m-0 ml-2"
                src={logo}
                alt="logo"
                height={50}
                width={150}
              />
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}

          {session ? (
            <>
              <Menu.Item key="5">
                <Link href={dashboardLink}>Dashboard</Link>
              </Menu.Item>

              <Button
                className="ml-4"
                ghost
                size="large"
                type="primary"
                danger
                onClick={() => {
                  signOut();
                }}
              >
                Logut
              </Button>
            </>
          ) : (
            <Button
              className="ml-4"
              ghost
              size="large"
              type="primary"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </Button>
          )}
        </Menu>
      </Header>
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
  );
};

export default Navbar;
