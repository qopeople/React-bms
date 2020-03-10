import React from 'react'; //为了能够解析组件用法
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';  
import {BrowserRouter , Router , Route,Switch ,Redirect} from 'react-router-dom';
import Login from './pages/Login';
import HomeLayout from  './pages/HomeLayout';


ReactDOM.render( (
    <BrowserRouter>
     
        <Route component = {Login} path="/"  exact >  
        </Route>
        <Route component = {HomeLayout} path="/mainPage" >
        </Route> 
     
        </BrowserRouter>

), document.getElementById('root'));
