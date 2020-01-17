import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './my.scss'
export default class My extends Component {
    render() {
        return (
            <div className='my'>
                <div className='header'>
                    <div className='personal'>
                        <img src={require('../../../assets/images/banner1.jpg')} />
                        <div>
                            <Link to='/login'>登录/</Link>
                            <Link to='/reg'>注册</Link>
                            <p>可以与经纪人发起聊天</p>
                        </div>
                        <span>
                            <img src={require('../../../assets/images/set.png')} />
                        </span>
                    </div>
                    {/* 钱包、优惠、积分 */}
                    <div className='personal-info'>
                            <div className='item'>
                                <p>0</p>
                                <div>
                                    <img src={require('../../../assets/images/my_pic3.png')} />
                                    <span>钱包</span>
                                </div>
                            </div>
                            <div className='item'>
                                <p>0</p>
                                <div>
                                    <img src={require('../../../assets/images/my_pic2.png')} />
                                    <span>优惠</span>
                                </div>
                            </div>
                            <div className='item'>
                                <p>0</p>
                                <div>
                                    <img src={require('../../../assets/images/my_pic1.png')} />
                                    <span>积分</span>
                                </div>
                            </div>
                    </div>
                </div>
                {/* 背景取色 */}
                <div style={{ background: '#F5F5F9', height: '10px' }}></div>
                {/* 我的功能 */}
                <div className='personal-main'>
                    <div className='personal-item'>
                        <img src={require('../../../assets/images/score.png')} />
                        <p>我的积分</p>
                        <img src={require('../../../assets/images/next.png')} />
                    </div>
                    <div className='personal-item'>
                        <img src={require('../../../assets/images/internet.png')} />
                        <p>我的订阅</p>
                        <img src={require('../../../assets/images/next.png')} />
                    </div>
                    <div className='personal-item'>
                        <img src={require('../../../assets/images/contact.png')} />
                        <p>微聊联系人</p>
                        <img src={require('../../../assets/images/next.png')} />
                    </div>
                     {/* 背景取色 */}
                     <div style={{ background: '#F5F5F9', height: '10px' }}></div>
                    <div className='personal-item'>
                        <img src={require('../../../assets/images/calculator.png')} />
                        <p>房贷计算器</p>
                        <img src={require('../../../assets/images/next.png')} />
                    </div>
                    <div className='personal-item'>
                        <img src={require('../../../assets/images/star.png')} />
                        <p>我的房子</p>
                        <img src={require('../../../assets/images/next.png')} />
                    </div>
                     {/* 背景取色 */}
                     <div style={{ background: '#F5F5F9', height: '10px' }}></div>
                    <div className='personal-item'>
                        <img src={require('../../../assets/images/personal_his.png')} />
                        <p>我的看房记录</p>
                        <img src={require('../../../assets/images/next.png')} />
                    </div>
                    <div className='personal-item'>
                        <img src={require('../../../assets/images/personal_user.png')} />
                        <p>我的问答</p>
                        <img src={require('../../../assets/images/next.png')} />
                    </div>
                     {/* 背景取色 */}
                     <div style={{ background: '#F5F5F9', height: '10px' }}></div>
                    <div className='personal-item'>
                        <img src={require('../../../assets/images/personal_set.png')} />
                        <p>设置</p>
                        <img src={require('../../../assets/images/next.png')} />
                    </div>
                </div>
            </div>
        )
    }
}
