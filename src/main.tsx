import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./commons/layout/Layout";
import Home from "./admin_module/scenes/Home";
import DataTable from "./admin_module/scenes/Table";
import Merchant from "./admin_module/scenes/Merchant";
import Login from "./commons/scenes/Login";

export default () => (
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route path="/home">
      <Layout>
        <Home />
      </Layout>
    </Route>
    <Route path="/datatable">
      <Layout>
        <DataTable />
      </Layout>
    </Route>
    <Route path="/merchants">
      <Layout>
        <Merchant />
      </Layout>
    </Route>
    {/* <Layout>
      <Route exact path="/home" component={Home} />
      <Route path="/datatable" component={DataTable} />
      <Route path="/merchants" component={Merchant} />
    </Layout> */}
  </BrowserRouter>
);
