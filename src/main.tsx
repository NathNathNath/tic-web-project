import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import authProvider from "./session/authProvider";
import { Layout, Login, Dashboard } from "./commons";
import merchant from "./modules/merchant";
import branch from "./modules/branch";
import users from "./modules/users";
import menu from './modules/menu';
import dataProvider from "./service/base.api";

function Main() {
  return (
    <Admin
      title="Talk Innovations Admin Portal"
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      loginPage={Login}
      layout={Layout}
    >
      <Resource name="users" {...users} />
      <Resource name="merchant" {...merchant} />
      <Resource name="branch" {...branch} />
      <Resource name="menu" {...menu} />
    </Admin>
  );
}

export default Main;
