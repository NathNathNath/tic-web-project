import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import TextIcon from "../../components/extension/TextIcon";
import { useSelector } from "react-redux";
import { MenuState } from "../../components/store/sideMenuToggle/reducer";

interface props {}
function SideMenu(props: any) {
  const menuState = useSelector<MenuState>((state) => state.status);

  const urlPath = useLocation().pathname;

  const getMenu = () => {
    return (
      <Menu fixed="left" borderless className="side" vertical>
        <Menu.Item
          as={Link}
          to={"/home"}
          name="home"
          active={urlPath === "/home"}
        >
          <TextIcon name="home">Dashboard</TextIcon>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/datatable"}
          name="datatable"
          active={urlPath === "/datatable"}
        >
          <TextIcon name="table">Data Table</TextIcon>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/merchants"}
          name="merchants"
          active={urlPath === "/merchants"}
        >
          <TextIcon name="folder">Merchants</TextIcon>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div className="parent">
      <div className={(menuState ? "show-side-menu " : " ") + "side"}>
        {getMenu()}
      </div>
      <div className="body-content">{props.children}</div>
    </div>
  );
}

export default SideMenu;
