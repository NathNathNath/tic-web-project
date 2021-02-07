import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import authProvider from "./session/authProvider";
import { Layout, Login, Dashboard } from "./commons";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

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
      <Resource name="Merchants" />
    </Admin>
  );
}

export default Main;
