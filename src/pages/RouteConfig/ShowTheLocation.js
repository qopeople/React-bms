import React from 'react'
import PropTypes from 'prop-types'  //设置父组件传值的类型，否则会抛出一定的异常
import { withRouter } from 'react-router'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import store  from '../../redux/store'
import NavTag from  '../Components/NavTag';
const pathName = [{
  path:"/mainPage",
  titieName:"首页"
}, {
  path: "/mainPage/OrderAdd",
  titieName: "订单列表"
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
}]
class ShowTheLocation extends React.Component {
  constructor(props){
    super(props);
    this.handleChange =this.handleChange.bind(this);
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  handleChange(tagName){
   let path = pathName.filter(item=>item.titieName == tagName);
    this.props.history.push(path[0].path);
  }
  render() {
    const { match, location, history } = this.props
    const nowloaction = pathName.filter(item=> item.path == location.pathname)
   
    store.dispatch({ type: 'INCREMENT',text:nowloaction[0].titieName }) //更新state
    return (
      // <input style={{display:'none'}}  ></input>
      <NavTag  currentpage = {nowloaction[0].titieName }  onHandle={this.handleChange}></NavTag>
    )
  }
}

export default withRouter(ShowTheLocation) //组件名称，导出该组件，保证在最外边