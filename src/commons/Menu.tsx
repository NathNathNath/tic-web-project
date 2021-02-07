import * as React from "react";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import SettingsIcon from "@material-ui/icons/Settings";
import LabelIcon from "@material-ui/icons/Label";
import { useMediaQuery, Theme, Box } from "@material-ui/core";
import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
} from "react-admin";

const Menu: FC<MenuProps> = ({ onMenuClick, logout, dense = false }) => {
  return <Box></Box>;
};

export default Menu;
