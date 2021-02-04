import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";

const Layout = (props: any) => (
  <div className="grid">
    <div className="menu">
      <TopMenu />
    </div>
    <div className="main-content">
      <SideMenu>{props.children}</SideMenu>
    </div>
  </div>
);

export default Layout;
