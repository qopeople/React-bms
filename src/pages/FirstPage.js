import React, { Component, useState } from "react";
import { Alert, Avatar } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  TagsOutlined,
  BarChartOutlined
} from "@ant-design/icons";
import "../styles/first-page.css";
import axios from "axios";
import "../request/mock";
import {
  BarChart,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LineChart, Line,
} from "recharts";
// let linedata = [ {
//   name: 'Page A', uv: 4000, pv: 2400
// },
// {
//   name: 'Page B', uv: 3000, pv: 1398
// },
// {
//   name: 'Page C', uv: 2000, pv: 9800
// },
// {
//   name: 'Page D', uv: 2780, pv: 3908
// },
// {
//   name: 'Page E', uv: 1890, pv: 4800
// },
// {
//   name: 'Page F', uv: 2390, pv: 3800
// },
// {
//   name: 'Page G', uv: 3490, pv: 4300
// },]
class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      inform1: [],
      linedata: []
    };
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    axios.get("/firstpage", { dataType: "json" }).then(res => {
      this.setState({
        inform1: res.data.data2
      });
    });
    axios.get("/firstpage2", { dataType: "json" }).then(res => {
      this.setState({
        linedata: res.data.data3
      });
      //  linedata = res.data.data3
      // console.log(linedata)
    });
  }
  handleClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    const now = new Date();
    const message =
      "欢迎使用后台管理系统(v1.0)  您本次登陆的时间为：" +
      now.getFullYear() +
      "年" +
      (now.getMonth() + 1) +
      "月" +
      now.getHours() +
      "时" +
      now.getMinutes() +
      "分";
    const inform1 = this.state.inform1;
    return (
      <div>
        {this.state.visible ? (
          <Alert
            message={message}
            type="success"
            closable
            afterClose={this.handleClose}
            showIcon
          />
        ) : null}
        <div className="yy-row-1">
          <div className="yy-col-1">
            <Avatar
              size={100}
              shape="square"
              icon={<UserOutlined />}
              style={{ backgroundColor: "#6ccac9", color: "white" }}
            />
            <div className="yy-dec-box">
              <p className="yy-dec1">{inform1.newClient}</p>
              <p className="yy-dec2">新增客户</p>
            </div>
          </div>
          <div className="yy-col-1">
            <Avatar
              size={100}
              shape="square"
              icon={<TagsOutlined />}
              style={{ backgroundColor: "#ff6c60", color: "white" }}
            />
            <div className="yy-dec-box">
              <p className="yy-dec1">{inform1.finshOrder}</p>
              <p className="yy-dec2">完成量</p>
            </div>
          </div>
          <div className="yy-col-1">
            <Avatar
              size={100}
              shape="square"
              icon={<ShoppingCartOutlined />}
              style={{ backgroundColor: "#f8d347", color: "white" }}
            />
            <div className="yy-dec-box">
              <p className="yy-dec1">{inform1.newOrder}</p>
              <p className="yy-dec2">新增订单</p>
            </div>
          </div>
          <div className="yy-col-1">
            <Avatar
              size={100}
              shape="square"
              icon={<BarChartOutlined />}
              style={{ backgroundColor: "#57c8f2", color: "white" }}
            />
            <div className="yy-dec-box">
              <p className="yy-dec1">{inform1.profit}</p>
              <p className="yy-dec2">总利润</p>
            </div>
          </div>
        </div>
        <div style={{    display: 'flex',    position: 'relative'}}>
        <BarChart width={750} height={380} data={this.state.linedata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
        <LineChart
          width={400}
          height={160}
          data={this.state.linedata}
          style={{backgroundColor:'#3ecbbe',marginLeft:'40px'}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" interval="preserveEnd" />
          <YAxis interval="preserveEnd" /> */}
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

        <BarChart
        width={400}
        height={160}
        data={this.state.linedata}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
        className="yy-line3"
      >
        <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name"  /> 
         {/* <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />   */}
        <Tooltip />
        <Bar yAxisId="left" dataKey="pv" fill="#ffffff" />
      </BarChart>
        </div>
      </div>
    );
  }
}

export default FirstPage;
