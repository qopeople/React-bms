import React, { useState } from "react";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map(domain => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "86"
      }}
      scrollToFirstError
    >
    <Form.Item 
    name="username" 
    label="账号名称" 
    rules={[{ required: true , message: "请输入小程序账号名称"}]}  style={{ width:450 }}>
        <Input size="Middle"  />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: "请输入设定密码"
          }
        ]}
        hasFeedback
        style={{ width:450 }}
        size="Middle"
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="realname"
        label="真实姓名 "
        rules={[
          {
            required: true,
            message: "请输入客户的真实姓名"
          }
        ]}
        style={{ width:450 }}
      >
        <Input   size="Middle"/>
      </Form.Item>
      <Form.Item
        name="email"
        label="电子邮箱 "
        rules={[
          {
            type: "email",
            message: "抱歉！该不符合电子邮箱格式"
          },
          {
            required: true,
            message: "请输入电子邮箱"
          }
        ]}
        style={{ width:450 }}
      >
        <Input   size="Middle"/>
      </Form.Item>

      <Form.Item
        name="phone"
        label="电话号码"
        rules={[
          {
            required: true,
            message: "请输入客户联系方式"
          }
        ]}
        style={{ width:450 }}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%"
          }}
        />
      </Form.Item>

      <Form.Item
        name="address"
        label="客户地址"
        rules={[
          {
            required: true,
            message: "请输入客户地址"
          }
        ]}
        style={{ width:450 }}
      >
        <Input

        />
      </Form.Item>
   

      <Form.Item {...tailFormItemLayout} style={{width:600}}>
        <Button type="primary" htmlType="submit">
        添加客户信息
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
