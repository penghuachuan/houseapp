import React, { Component } from 'react'
import { InputItem,Flex ,WhiteSpace , Button ,WingBlank ,NoticeBar} from 'antd-mobile'
import {Link} from 'react-router-dom'
import {clickLogin} from '../../api/loginapi'
import './login.scss'
export default class Login extends Component {
    state={
        user:'',
        pwd:'',
        olduser:'',
        oldpwd:'',
        isshow:'none',
    }
    render() {
        let {user , pwd,isshow}=this.state
        return (
            <div className='login'>
                <WhiteSpace size="lg"  />
                <WhiteSpace size="lg"  />
                <Flex justify="center">
                    <div style={{height:122}}>
                        <img style={{width:150}} src={ require('../../assets/images/logo.jpg')} />
                    </div>
                </Flex>
                <WhiteSpace size="lg"  />
                <WhiteSpace size="lg"  />
                <WingBlank size="lg">
                    <InputItem
                        placeholder="请输入账号"
                        clear
                        value={user}
                        onChange={(val)=>{this.setState({user:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon_user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace />

                    <InputItem
                        placeholder="请输入账号"
                        clear
                        type='password'
                        value={pwd}
                        onChange={(val)=>{this.setState({pwd:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.sendlogin}>登录</Button><WhiteSpace />
                    <WhiteSpace />

                    <Flex justify="between">

                        <Link to='/reg'>手机注册</Link>
                        <Link to='/forgetpwd'>忘记密码？</Link>
                    </Flex>
                    <WhiteSpace size="lg"  />
                    <p>
                        注册、登录即代表同意<a href='#'>《隐私政策》</a>和<a href='#'>《用户的使用协议》</a>
                    </p>
                    {/* 提示信息 */}
                    <div style={{display:isshow,position:"fixed",top:20,left:'24%'}} >
                         <NoticeBar mode="closable" icon={null}>账号或密码不正确</NoticeBar>
                    </div>
                </WingBlank>
            </div>
        )
    }
    sendlogin=()=>{
        let {user,pwd,olduser,oldpwd}=this.state
        // 防抖节流
        if(user===olduser && pwd===oldpwd){
                return
        }
        this.setState({
            olduser:user,
            oldpwd:pwd
        })
        clickLogin(user,pwd).then(data=>{
            if(data.data==='ok'){
                window.location.href='#/'
            }else{
                console.log(data)
                this.isshowtip()
            }
        })
    }
    // 发送失败提示信息
    isshowtip=()=>{
            this.setState({
                isshow:'block'
            })
            setTimeout(() => {
                this.setState({
                    isshow:'none'
                })
            }, 1000);
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        this.setState = (state, callback) => {
            return
        }
    }
}
