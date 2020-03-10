import React, { Component } from "react";
import { Card, Form, Input, Button, DatePicker, Select } from "antd";
import { CodeOutlined, FormOutlined, SearchOutlined } from "@ant-design/icons";
import "../../styles/order-list.css";
// const formLayout ={
//     labelCol: { span: 4 },
//           wrapperCol: { span: 14 },
// }
const { RangePicker } = DatePicker;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};
const { Option } = Select;
class OrderList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card
          title={
            <div>
              {" "}
              <SearchOutlined></SearchOutlined>
              <span>筛选搜索</span>
            </div>
          }
          extra={
            <div>
              <Button size="small" className="yy-btn">
                重置
              </Button>
              <Button className="yy-btn" type="primary" size="small">
                查询搜索
              </Button>
            </div>
          }
          style={{ width: "100%" }}
          headStyle={{ lineHeight: "48px" }}
        >
          {/* <Input placeholder="input placeholder" /> */}
          <Form {...layout} scrollToFirstError>
            <div style={{ display: "flex" }}>
              <Form.Item label="输入搜索" style={{ flex: "1" }}>
                <Input placeholder="订单编号" />
              </Form.Item>
              <Form.Item label="收货人" style={{ flex: "1" }}>
                <Input placeholder="收获人姓名/手机号码" />
              </Form.Item>
              <Form.Item label="订单状态" style={{ flex: "1" }}>
                <Select defaultValue="完成" allowClear='true' showArrow="true">
                  <Option value="完成">完成</Option>
                  <Option value="进行中">进行中</Option>
                  <Option value="待发货">待发货</Option>
                </Select>
              </Form.Item>
            </div>
            <div style={{ display: "flex" }}>
              <Form.Item label="订单时间" style={{ flex: "1" }}>
                <RangePicker
                  dateRender={current => {
                    const style = {};
                    if (current.date() === 1) {
                      style.border = "1px solid #1890ff";
                      style.borderRadius = "50%";
                    }
                    return (
                      <div className="ant-picker-cell-inner" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item label="订单分类" style={{ flex: "1" }}>
              <Select defaultValue="完成" allowClear='true' showArrow="true">
                  <Option value="完成">完成</Option>
                  <Option value="进行中">进行中</Option>
                  <Option value="待发货">待发货</Option>
                </Select>
              </Form.Item>
              <Form.Item label="订单来源" style={{ flex: "1" }}>
              <Select defaultValue="小程序" allowClear='true' showArrow="true">
                  <Option value="线下">线下</Option>
                  <Option value="APP">APP</Option>
                </Select>
              </Form.Item>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}
export default OrderList;
