"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Ana Sayfa",
    key: "mail",
  },

  {
    label: "Ürünler",
    key: "SubMenu",
  },

  {
    label: "Duyurular",
    key: "app",
  },

  {
    label: "Hakkımızda",
    key: "app",
  },
  {
    label: "İletişim",
    key: "app",
  },
];

export const Navbar = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className=""
    >
      <Menu.Item key="home">Ana Sayfa</Menu.Item>

      <Menu.Item key="products">Ürünler</Menu.Item>
      <Menu.Item key="home">Duyurular</Menu.Item>
      <Menu.Item key="home">Hakkımızda</Menu.Item>
      <Menu.Item key="home">İletişim</Menu.Item>
    </Menu>
  );
};
