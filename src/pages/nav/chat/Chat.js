import React, { Component } from 'react'
import './chat.scss'
export default class Chat extends Component {
    render() {
        return (
            <div className='chat'>
                <div className='counselor'>
                     <p><img src={require('../../../assets/images/banner1.jpg')} /></p>
                    <p>置业顾问：<span>小貂蝉</span></p>
                    <p>专业服务诚信做人诚心做事</p>
                    <p><button>我要聊天</button></p>
                </div>
            </div>
        )
    }
}
