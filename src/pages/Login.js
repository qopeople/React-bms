import React, { Component } from "react";
import { Input, Button ,Modal} from "antd";
import { UserOutlined ,ExclamationCircleOutlined} from "@ant-design/icons";
import "../styles/login-page.css";
import axios from "axios";
import "../request/mock";

class Login extends Component {
  constructor(props) {
    super(props);
    this.checkLogin = this.checkLogin.bind(this);
    this.inputValue1 = this.inputValue1.bind(this);
    this.inputValue2 = this.inputValue2.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }
  checkLogin() {
      let username = this.state.username;
      let password = this.state.password;
    //   let history = useHistory();
      axios.get("/login",{dataType:'json'}).then(res=>{
          if(res.data.userdata.username == username && res.data.userdata.password == password){
            let secondsToGo = 2;
            const modal = Modal.success({
              title: '提示',
              content: `用户信息确认完成！在 ${secondsToGo} s 跳转主界面.`,
            });
            const timer = setInterval(() => {
              secondsToGo -= 1;
              modal.update({
                content: `用户信息确认完成！在 ${secondsToGo} s 跳转主界面.`,
              });
            }, 1000);
            setTimeout(() => {
              clearInterval(timer);
              modal.destroy();
            //   this.content.push('')
            this.props.history.replace("/mainPage")  //
            }, secondsToGo * 1000);
          }
      })
  }
  inputValue1(e) {
      this.setState({
        username:e.target.value
      })
  }
  inputValue2(e) {
    this.setState({
        password:e.target.value
    })
  }
  componentDidMount() {
    // axios.get('/mock',{dataType:'json'}).then(res=>{
    //     console.log(res.data.userinfo)
    // });
    // axios.get('/mock1',{dataType:'json'}).then(res=>{
    //     console.log(res.data.userdata)
    // })
  }

  render() {
    return (
      <div className="yy-bg">
        <div className="yybox">
          <div className="yy-input">
            {" "}
            <Input
              size="large"
              placeholder="请输入用户名"
              prefix={<UserOutlined />}
              value={this.state.username}
              onInput={this.inputValue1}
            />
          </div>
          <div className="yy-input">
            <Input.Password
              size="large"
              placeholder="请输入密码"
              value={this.state.password}
              onInput={this.inputValue2}
            />
          </div>
          <div className="yy-btn" onClick={this.checkLogin}>
            <Button>登录</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
