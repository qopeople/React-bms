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
let show_num=[]
const tips = "密码由6-16个字符组成（不包括空格）";
const tips2 = "为了提高您的安全性，建议使用英文数字混合密码";
class ChangePassword extends Component {
   constructor(props){
     super(props);
     this.draw = this.draw.bind(this);
   }
   componentDidMount(){
     this.draw()
   }
  //生成并渲染出验证码图形
    draw() {
    var canvas_width=150;
    var canvas_height=50;
    var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
    var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    var aCode = sCode.split(",");
    var aLength = aCode.length;//获取到数组的长度
    for (var i = 0; i < 4; i++) { //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
     var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
     // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
     var deg = Math.random() - 0.5; //产生一个随机弧度
     var txt = aCode[j];//得到随机的一个内容
     show_num[i] = txt.toLowerCase();
     var x = 10 + i * 20;//文字在canvas上的x坐标
     var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
     context.font = "bold 23px 微软雅黑";
     context.translate(x, y);//重新映射画布上的 (x,y) 位置。
     context.rotate(deg);//旋转当前绘图
     context.fillStyle = this.randomColor();  //随机设置颜色
     context.fillText(txt, 0, 0);
     context.rotate(-deg);  //再旋转回去
     context.translate(-x, -y);
    }
    for (var i = 0; i <= 5; i++) { //验证码上显示线条
     context.strokeStyle = this.randomColor();
     context.beginPath();
     context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
     context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
     context.stroke();
    }
    for (var i = 0; i <= 30; i++) { //验证码上显示小点
     context.strokeStyle = this.randomColor();
     context.beginPath();
     var x = Math.random() * canvas_width;
     var y = Math.random() * canvas_height;
     context.moveTo(x, y);
     context.lineTo(x + 1, y + 1);
     context.stroke();
    }
   }
   //得到随机的颜色值
   randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
   }
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
             help="请输入图中字符，字母区分不大小写"
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
          <Form.Item {...tailLayout}>
          <canvas id="canvas" width="150" height="50" onClick={this.draw}></canvas>
          <span className="changeContext" onClick={this.draw}>看不清，换一张</span>
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
