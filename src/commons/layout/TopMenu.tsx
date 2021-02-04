import React from "react";
import { Icon, Image, Menu, Dropdown } from "semantic-ui-react";
import logoImg from "../../assets/images/qt_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { MenuState } from "../reducer";

const trigger = (
  <span>
    <Icon name="user" /> Hello, Billy &nbsp;
  </span>
);
const options = [
  {
    key: "user",
    text: (
      <span>
        Signed in as <strong>Billy Jack Sanchez</strong>
      </span>
    ),
    disabled: true,
  },
  { key: "profile", text: "Your Profile" },
  { key: "help", text: "Help" },
  { key: "settings", text: "Settings" },
  { key: "sign-out", text: "Sign Out" },
];

function TopMenu() {
  const menuState = useSelector<MenuState>((state) => state.status);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU", payload: !menuState });
  };
  return (
    <Menu fixed="top" className="top-menu">
      <Menu.Item className="logo-space-menu-item">
        <div className="display-inline logo-space">
          <Image src={logoImg} width="30px" />
          <p>QuickTalk</p>
        </div>
      </Menu.Item>

      <Menu.Item className="btn-sm-toggle no-border " onClick={toggleMenu}>
        <Icon name="bars" />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item className="no-border" position="right">
          <Dropdown trigger={trigger} options={options} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
export default TopMenu;
