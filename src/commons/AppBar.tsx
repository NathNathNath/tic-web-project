import * as React from "react";
import { forwardRef } from "react";
import { AppBar, UserMenu, MenuItemLink, useTranslate } from "react-admin";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/icons/PermPhoneMsg";
const MainUserMenu = (props: any) => <UserMenu {...props}></UserMenu>;

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
});

const MainAppBar = (props: any) => {
  const classes = useStyles();
  return (
    <AppBar {...props} elevation={1} userMenu={<MainUserMenu />}>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      ></Typography>
      <Icon />
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default MainAppBar;
