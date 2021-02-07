import * as React from "react";
import { useSelector } from "react-redux";
import { Layout, LayoutProps } from "react-admin";
import MainAppBar from "./AppBar";
import MainSidebar from "./MainSidebar";
import Menu from "./Menu";
import { darkTheme, lightTheme } from "../util/themes";
import { AppState } from "../util/types";

const MainLayout = (props: LayoutProps) => {
  const theme = useSelector((state: AppState) =>
    state.theme === "dark" ? darkTheme : lightTheme
  );
  return (
    <Layout
      {...props}
      appBar={MainAppBar}
      sidebar={MainSidebar}
      menu={Menu}
      //theme={theme}
    />
  );
};

export default MainLayout;
