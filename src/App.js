import React, { Component } from 'react'
// 引入antd-mobile。css
import 'antd-mobile/dist/antd-mobile.css';
// 引入路由配置
import {HashRouter, Switch ,Route} from 'react-router-dom'
// 引入组件
import Login from './pages/login/Login'
import Nav from './pages/nav/Nav'
import Reg from './pages/reg/Reg'
import Forgetpwd from './pages/forgetpwd/Forgetpwd.js'

import City from './pages/city/City.js'
import Search from './pages/search/Search.js'
import CityMap from './pages/map/Map.js'
import Houseinfo from './pages/houseinfo/Houseinfo'

import { Button } from 'antd-mobile';
export default class App extends Component {
  render() {

    return (
      <div style={{height:'100%',backgroundColor:'#fff'}}>
         <HashRouter>
            <Switch>
               <Route path='/' exact component={Nav}></Route>
               <Route path='/login'  component={Login}></Route>
               <Route path='/reg'  component={Reg}></Route>
               <Route path='/forgetpwd'  component={Forgetpwd}></Route>
               <Route path='/city'  component={City}></Route>
               <Route path='/search'  component={Search}></Route>
               <Route path='/citymap'  component={CityMap}></Route>
               <Route path='/houseinfo'  component={Houseinfo}></Route>
            </Switch>
         </HashRouter>
      </div>
    )
  }
}

