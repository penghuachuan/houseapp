import React, { Component } from 'react'
import { InputItem, Flex, WhiteSpace, Button, WingBlank, Checkbox } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './reg.scss'
import {Regrequst ,valiData } from '../../api/loginapi'
export default class Reg extends Component {
    state = {
        user: '',
        pwd: '',
        code: '',
        olduser:'',
        oldpwd:'',
        checked: false,
    }
    render() {
        let { user, pwd, code } = this.state
        const AgreeItem = Checkbox.AgreeItem;
        return (
            <div className='reg'>
                <WingBlank size="lg">
                    <WhiteSpace />
                    <InputItem
                        placeholder="请输入手机号"
                        clear
                        value={user}
                        onChange={(val) => { this.setState({ user: val }) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon_user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        type='password'
                        value={pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        placeholder="请输入验证码"
                        clear
                        extra="获取验证码"
                        value={code}
                        onChange={(val) => { this.setState({ code: val }) }}
                        onExtraClick={this.coderequst.bind(this)}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon_code.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
              
                    <AgreeItem data-seed="logId" onChange={e =>{this.setState({checked:e.target.checked})}}>
                             我已同意 <a onClick={(e) => { e.preventDefault();}}>用户的使用协议》及《隐私协议》</a>
                    </AgreeItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.regrequst} className={this.state.checked ? '': 'isdisable'} disabled={!this.state.checked}>注册</Button><WhiteSpace />
                    <WhiteSpace />
                    <Link to='./login'>已有账号</Link>
                </WingBlank>
            </div>
        )
    }
  
    regrequst=()=>{
        let {user,pwd,olduser,oldpwd}=this.state
        if(user===olduser && pwd===oldpwd){
            return
        }
        this.setState({
            olduser:user,
            oldpwd:pwd
        })
        Regrequst(user,pwd).then(data=>{
            if(data.data==='ok'){
                window.location.href='#/login'
                // console.log(data)
            }else{
                // console.log(data)
            }
        })
    }
    // 验证码
        coderequst(){
            valiData().then(data=>{
                this.setState({
                    code:data.data
                })
            })
        }
        componentWillUnmount() {
            // 卸载异步操作设置状态
            this.setState = (state, callback) => {
                return
            }
        }
}
