import { useGetLocale } from "@pankod/refine-core";
import {
  AntdLayout,
  Space,
  Menu,
  Button,
  Icons,
  Dropdown,
  Avatar,
  Switch,
} from "@pankod/refine-antd";
import NextRouter from "@pankod/refine-nextjs-router";
import { useTheme } from "next-themes";
import { useState } from "react";

import { useRouter } from "next/router";

const { Link } = NextRouter;

const { DownOutlined, SettingOutlined } = Icons;

export const Header: React.FC = () => {
  const locale = useGetLocale();
  const { locales } = useRouter();

  const currentLocale = locale();

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const menu = (
    <Menu selectedKeys={[currentLocale]}>
      {[...(locales || [])].sort().map((lang: string) => (
        <Menu.Item
          key={lang}
          icon={
            <span style={{ marginRight: 8 }}>
              <Avatar size={16} src={`/images/flags/${lang}.svg`} />
            </span>
          }
        >
          <Link href="/" locale={lang}>
            {lang === "en" ? "English" : "العربية"}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <AntdLayout.Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "48px",
      }}
    >
      <Dropdown overlay={menu}>
        <Button type="link">
          <Space>
            <Avatar size={16} src={`/images/flags/${currentLocale}.svg`} />
            {currentLocale === "en" ? "English" : "العربية"}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Space style={{ marginLeft: "8px" }}>
        <Switch
          checkedChildren="🌜"
          unCheckedChildren="🌞"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
      </Space>
    </AntdLayout.Header>
  );
};
