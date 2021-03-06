import React from "react";
import { BrowserRouter , Router, Route, Link } from "react-router-dom";

import OrderList from "../OrderManage/OrderList"
import OrderAdd from "../OrderManage/OrderAdd";

import ProcessList from "../ProcessManage/ProcessList";

import ClientAdd from "../ClienManage/ClientAdd";
import ClientList from "../ClienManage/ClientList";

import FirstPage from "../FirstPage";
import ChangePassword from  "../ChangePassword"

// then our route config
const routes = [
  {
    path: "/mainPage/FirstPage",
    component: FirstPage
  },
  {
    path: "/mainPage/OrderAdd",
    component: OrderAdd
  },
  {
    path: "/mainPage/ProcessList",
    component: ProcessList
  },
  {
    path: "/mainPage/ClientAdd",
    component: ClientAdd
  },
  {
    path: "/mainPage/ChangePassword",
    component: ChangePassword
  },
  {
    path: "/mainPage/ClientList",
    component: ClientList
  },  {
    path: "/mainPage/OrderList",
    component: OrderList
  },
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}  />
    )}
  />
);

const RouteConfig= () => (
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
 
);

export default RouteConfig;
