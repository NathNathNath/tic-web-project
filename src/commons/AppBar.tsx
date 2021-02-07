import * as React from "react";
import { forwardRef } from "react";
import { AppBar, UserMenu, MenuItemLink, useTranslate } from "react-admin";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/core/styles";

const MainUserMenu = (props: any) => <UserMenu {...props}></UserMenu>;

const MainAppBar = (props: any) => {
  return <AppBar {...props} elevation={1} userMenu={<MainUserMenu />}></AppBar>;
};

export default MainAppBar;
