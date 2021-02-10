import * as React from "react";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { DashboardMenuItem, MenuItemLink, MenuProps } from "react-admin";

import { AppState } from "../util/types";
import dashboard from "./../modules/dashboard";
import users from "./../modules/users";
import roles from "./../modules/roles";
import merchant from "./../modules/merchant";
import branch from "./../modules/branch";
import menu from "./../modules/menu";

type MenuName = "menuUser" | "menuMerchant" | "menuBranch";

const Menu: FC<MenuProps> = ({ onMenuClick, logout, dense = false }) => {
  const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
  const [state, setState] = useState({
    menuUser: true,
    menuMerchant: true,
    menuBranch: true,
  });
  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };
  return (
    <Box mt={2}>
      <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
      <MenuItemLink
        to={`/users`}
        primaryText={"Users"}
        leftIcon={<users.icon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      <MenuItemLink
        to={`/roles`}
        primaryText={"Roles"}
        leftIcon={<roles.icon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      <MenuItemLink
        to={`/merchant`}
        primaryText={"Merchant"}
        leftIcon={<merchant.icon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      <MenuItemLink
        to={`/branch`}
        primaryText={"Branch"}
        leftIcon={<branch.icon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      <MenuItemLink
        to={`/menu`}
        primaryText={"Menu"}
        leftIcon={<menu.icon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
    </Box>
  );
};

export default Menu;
