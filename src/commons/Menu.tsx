import * as React from "react";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { DashboardMenuItem, MenuItemLink, MenuProps } from "react-admin";

import { AppState } from "../util/types";
import dashboard from "./../modules/dashboard";
import merchant from "./../modules/merchant";
import branch from "./../modules/branch";

type MenuName = "menuMerchant" | "menuBranch";

const Menu: FC<MenuProps> = ({ onMenuClick, logout, dense = false }) => {
  const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
  const [state, setState] = useState({
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
    </Box>
  );
};

export default Menu;
