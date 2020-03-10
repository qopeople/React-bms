import React, { Component } from "react";
import { WindowsOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Form, Input, Button, Progress, Tooltip } from "antd";
import "../styles/change-password.css";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 7 }
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 7 }
};
let level ="强"
const tips = "密码由6-16个字符组成（不包括空格）";
const tips2 = "为了提高您的安全性，建议使用英文数字混合密码";
class ChangePassword extends Component {
  render() {
    return (
      <div className="yy-box">
        <div className="yy-title-1">
          为了更好的保护您的账号安全，避免您受到损失，建议您设置密码时：
        </div>
        <ul className="yy-title-2">
          <li>
            使用
            <WindowsOutlined style={{ color: "cornflowerblue" }} />
            电脑管家全面杀毒
          </li>
          <li>请尽量不要设置和其他网站相同的密码</li>
          <li>建议密码采用字母和数字混合，且不短于6位数</li>
        </ul>
        <Form {...layout} scrollToFirstError>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: "请输入原先的密码"
              },{
                min:6,
                whitespace:true,
                message: "请输入正确的密码"
              }
            ]}
            hasFeedback
          >
            <Input.Password  placeholder="请输入原密码"/>
          </Form.Item>
          <Form.Item
            name="confirm"
            label="新密码"
          
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "请输入新的密码"
              },{
                min:6,
                whitespace:true,
                message: "请输入正确的密码"
              }
            ]}
          >
            <Input.Password  placeholder={tips}/>
          </Form.Item>
          <Form.Item 
          {...tailLayout}
          help={tips2}>
            <Progress
            percent={92}
              type="line"
              strokeWidth="15px"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
              format={percent => `${level}`  }
              showInfo="false"
            />

            <br />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="验证码"
             help="请输入图中字符，字母区分大小写"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "请输入新的密码"
              },{
                min:6,
                whitespace:true,
                message: "请输入正确的密码"
              }
            ]}
            style={{marginTop:'20px'}}
          >
            <Input/>
          </Form.Item>
          <Form.Item {...tailLayout} style={{marginTop:'30px'}}>
            <Button type="primary" htmlType="submit" style={{width:'320px'}}>
              完成
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default ChangePassword;
