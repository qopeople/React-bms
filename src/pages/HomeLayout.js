import React, { Component, Fragment } from "react";
import { Layout, Menu, Tag, Input, Tooltip } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SwitcherOutlined,
  UnlockOutlined,
  BankOutlined,
  CarryOutOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
  PoweroffOutlined,
  PlusOutlined
} from "@ant-design/icons";
import "../styles/home-layout.css";
import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";
import RouteConfig from "./RouteConfig/route";
import ShowTheLocation from './RouteConfig/ShowTheLocation'
import NavTag from './Components/NavTag';


const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
// const store = createStore(tags);
let statespath =[];
class HomeLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.toLoginPage = this.toLoginPage.bind(this);
}
// 
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  toLoginPage() {
    this.props.history.replace("/");
  };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/mainPage">
                  <BankOutlined />
                  <span>首页</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/mainPage/ProcessList">
                  <UsergroupAddOutlined />
                  <span>加工户管理</span>
                </Link>
              </Menu.Item>

              <SubMenu
                key="sub1"
                title={
                  <span>
                    <SolutionOutlined />
                    <span>客户管理</span>
                  </span>
                }
              >
                <Menu.Item key="3">客户列表</Menu.Item>
                <Menu.Item key="4">
                  <Link to="/mainPage/ClientAdd">新增客户</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                title={
                  <span>
                    <SwitcherOutlined />
                    <span>订单管理</span>
                  </span>
                }
              >
                <Menu.Item key="5">订单列表</Menu.Item>
                <Menu.Item key="6">新增订单</Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub3"
                title={
                  <span>
                    <SwitcherOutlined />
                    <span>接单审核</span>
                  </span>
                }
              >
                <Menu.Item key="7">接单列表</Menu.Item>
                <Menu.Item key="8">审核接单信息</Menu.Item>
              </SubMenu>

              <Menu.Item key="9">
                <UnlockOutlined />
                <Link to="/mainPage/ChangePassword">
                  <span>密码修改</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="10" onClick={this.toLoginPage}>
                <PoweroffOutlined />
                <span>退出登录</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle
                }
              )}
              <ShowTheLocation></ShowTheLocation>
             
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: "82vh"
              }}
            >
             
              <RouteConfig></RouteConfig>
              {/* {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
              {/* <Switch>
                <Route path="/mainPage" component={OrderAdd} exact></Route>
                <Route path="/mainPage/2" component={ChangePassword}></Route>
                <Route
                  path="/mainPage/ProcessList"
                  component={ProcessList}
                ></Route>
                <Route path="/mainPage/ClientAdd" component={ClientAdd}></Route>
              </Switch> */}
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}
// const  hanleChangeRoute = ()=>{
//   // getStore = store.getState()
//   console.log(store.getState())
// }
// store.subscribe(hanleChangeRoute) 
export default HomeLayout