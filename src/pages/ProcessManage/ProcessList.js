 import React ,{Component}from 'react';
import {Table,Input,Avatar,Tag } from  "antd";
import axios from "axios";
import "../../request/mock";
import {
   CodeOutlined
  } from "@ant-design/icons";

const columns = [
    {
      title: '头像',
      dataIndex: 'avatar',
      key:"avatar",
      width:100,
      render: text => <Avatar src={text} />,
    },
    {
      title: '手机号码',
      dataIndex: 'photo',
      key:"photo"
    },
    {
      title: '昵称',
      dataIndex: 'name',
      key:'name',
      width:100
    },  {
        title: '微信标识',
        dataIndex: 'openId',
        key:'openId',
        width:330
      },  {
        title: '注册时间',
        dataIndex: 'registerTime',
        key:'registerTime'
      },
      {
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: (text, record)  => <Tag color="purple">接单详情</Tag>,
      },
  ];
class ProcessList extends Component{
    constructor(props){
        super(props);
        this.state={
            tableData:[],
            requestData:[]
        }
        this.searchInform = this.searchInform.bind(this);
    }
    componentDidMount(){
        axios.get("/ProcessList",{dataType:'json'}).then(res=>{
        console.log(res.data.tableinfo)
        this.setState({
            requestData:res.data.tableinfo,
            tableData:res.data.tableinfo
        })
        })
    }
    searchInform  (e){
  
        let value = e.target.value;
        if(value!=null){
        let tableData = this.state.requestData;
        let result = tableData.filter(dataNews => {
            return Object.keys(dataNews).some(key => {
                return String(dataNews[key]).toLowerCase().indexOf(value) > -1
            })
        })
        this.setState({
            tableData:result
        })
    }else{
        this.setState({
            tableData:this.state.requestData
        })
    }
    }
 render() {
    return(
        <div>
         <Input.Search size="large" placeholder="关键词搜索" enterButton  style={{ width:300}} onChange={ async e => {
            e.persist()
            await this.searchInform(e)}}/>
        <Table columns={columns} dataSource={this.state.tableData} size="middle"  scroll={{ y: '58vh'  }} />
     
      </div>
    )
 }
}

export default ProcessList