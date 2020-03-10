##  React全家桶---后台管理系统
### 前言
本项目是一个适用于想要学习react全家桶的朋友学习参考
### 项目组织结构
```
 my-react
   |--- public
   |---src 项目主要内容 
       |--- pages    //页面内容
       |--- redux    // 关于redux的相关文件
       |--- request  //关于mock模拟服务器渲染文件
       |--- images   //图片
       |--- styles   //css样式
   |---package.json
   |---package-lock.json
```
### 技术选型
| 技术 | 说明 | 官网 |
| ------ | ------ | ------ |
| react | 前端框架 | https://react.docschina.org/ |
| react-router | 路由 | https://reacttraining.com/react-router/web/example/url-params |
| Axois|前端http框架|https://www.kancloud.cn/yunye/axios/234845|
|Redux|全局状态管理框架|https://redux.js.org/api/store/#subscribelistener|
|mock|模拟数据测试框架|https://github.com/nuysoft/Mock/wiki/Getting-Started|
|Recharts|基于react组合式图表框架|http://recharts.org/zh-CN/guide/getting-started|
|AntUI|前端UI框架|https://ant.design/components/select-cn/|
### 开发工具以及开发环境
`vscode编译器`、`git管理工具`、`nodejs`、`google`
### 搭建步骤
- 下载并且安装nodeJs
- 克隆仓库 `git clone https://github.com/qopeople/React-bms.git`
- 打开vscode打开文件夹 执行命令`npm i` 安装相应的依赖
- 再运行`npm start` 即可执行程序
### 踩坑记录
##### 一、监听redux的store内容更新并渲染到组件中
`注意:不要尝试在父组件中监听store内容，并且试图去用这个store.getStore()获取到的内容去更新子组件的内容，如果这样做子组件的内容不会更新！！`

如果需要监听store的更新情况，则需记住在哪个需要运用到store的内容，则在哪个组件进行监听~
```
  class ChildComponent extends Compoent{
        super(props);
        this.state = {
            tags: []
          };
          store.subscribe(()=>{
            this.setState({
                tags :store.getState()
            })
           
          });
       redenr(){
           return(
           <div> {{this.state.tags}}</div>
           )
       }
    }
  } 
```
##### 二、在redux框架中的withRouter的作用
`作用：把不是通过路由切换的组件中，将react-router的history、match、location三个对象时时传进this.props中`

默认情况下必须经过路由匹配渲染的组件才能在this.props中用于路由的参数。所以通过这个withRouter可以通过history监听浏览器的路径变化
```
import React from 'react'
import PropTypes from 'prop-types'  //设置父组件传值的类型，否则会抛出一定的异常
import { withRouter } from 'react-router'
class ShowTheLocation extends React.Component {
  constructor(props){
    super(props);
    this.handleClick= this.handleClick.bind(this);
    }
    //设置传进的props属性的规则
    static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
    handleClick(pathname){
        this.props.history.push(pathname); 
    }
    render() {
    const { match, location, history } = this.props;
      return (
      <div onClick ={this.handleClick(location.pathname)>location.pathname</div> //可以获取当前浏览的地址
      )
    }
}    

export default withRouter(ShowTheLocation) //关键一步
```
##### 三、实现导航栏式的路由跳转配置
当我们企图在导航栏中使用`<Link/>`达到切换渲染的子组件的功能时，我们需要使用到的组件是`<Router/>`、`<Route/>`、`<Switch/>`

传统而又冗余的方法如下：
```
<Router>
 <Link to="/child1">child1</Link>  //会在其最近的一个router组件中去寻找与之对应的路由
 <Link to="/child2">child2</Link>
 
 <Switch>
    <Route component={child1} path="child1"></Route> //路由组件
      <Route component={child2} path="child2"></Route>
 <Switch/>
</Router>
```
用组件进行封装,在父组件中引入即可   
```
 const routes = [
  {
    path: "/mainPage/FirstPage",
    component: FirstPage
  },
  {
    path: "/mainPage/OrderAdd",
    component: OrderAdd
  },
  {
    path: "/mainPage/ProcessList",
    component: ProcessList
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}  />
    )}
  />
);

const RouteConfig= () => (
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
 
);

export default RouteConfig;
```
##### 四、ant-ui中Input组件函数OnChange的使用
在我调用这个onChange去动态监听value的变化的时候却发现，已经把e.target的内容全部默认为null，这个是因为合成事件，包装器SyntheticEvent在事件回调函数被调用后，所以属性都是无效，所以e.target为null。 故此解决方案如下:
```
<Input onChange={async e => {
            e.persist() //移除合成事件，执行异步函数
            await this.searchInform(e)}}
/>
```
##### 五、webpack相关文件的配置
在使用create-react-app搭建的项目中webpack相关的配置文件并没有被暴露出来，但是并不是代表没有！

#### 参考博客
 - https://segmentfault.com/a/1190000020156100?utm_source=tag-newest
 - https://www.cnblogs.com/luowenshuai/p/9526341.html
 - https://blog.csdn.net/Ravings_now/article/details/90263301?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task
 - https://blog.csdn.net/weixin_34202952/article/details/86263954