import React from 'react'
import PropTypes from 'prop-types'  //设置父组件传值的类型，否则会抛出一定的异常
import { withRouter } from 'react-router'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import store  from '../../redux/store'
import NavTag from  '../Components/NavTag';
const pathName = [{
  path:"/mainPage/FirstPage",
  titieName:"首页"
}, {
  path: "/mainPage/OrderAdd",
  titieName: "新增订单"
},
{
  path: "/mainPage/ProcessList",
  titieName: "加工户管理"
},
{
  path: "/mainPage/ClientAdd",
  titieName: "新增客户"
},
{
  path: "/mainPage/ChangePassword",
  titieName: "密码修改"
},
{
  path: "/mainPage/OrderList",
  titieName: "订单列表"
},
{
  path: "/mainPage/ClientList",
  titieName: "客户列表"
}]
class ShowTheLocation extends React.Component {
  constructor(props){
    super(props);
    this.handleChange =this.handleChange.bind(this);
  }
  // componentDidMount(){
  //   console.log(this.props.location.pathname)
  // }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  handleChange(tagName){
   let path = pathName.filter(item=>item.titieName == tagName);
    this.props.history.push(path[0].path);
  }
  isFirstPage(){
    const { match, location, history } = this.props;
    if(location.pathname=='/mainPage'){
       this.props.history.push("/mainPage/FirstPage")
      return [{path:"/mainPage/FirstPage",titieName:"首页"}];
      }
    else { 
    return  pathName.filter(item=> item.path == location.pathname)
  };
  }
  render() {
    const { match, location, history } = this.props;
    const nowloaction  =this.isFirstPage()
   
    store.dispatch({ type: 'INCREMENT',text:nowloaction[0].titieName }) //更新state
    return (
      // <input style={{display:'none'}}  ></input>
      <NavTag  currentpage = {nowloaction[0].titieName }  onHandle={this.handleChange}></NavTag>
    )
  }
}

export default withRouter(ShowTheLocation) //组件名称，导出该组件，保证在最外边