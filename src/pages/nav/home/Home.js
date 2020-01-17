import React, { Component } from 'react'
import { WingBlank, SearchBar, Flex, Carousel, WhiteSpace } from 'antd-mobile'
import './home.scss'
import { gethouselist, IP } from '../../../api/loginapi'
import BScroll from 'better-scroll'
export default class Home extends Component {
    state = {
        data: ['banner1', 'banner2', 'banner3'],
        imgHeight: 176,
        houselist: [],
    }
    render() {
        let { houselist } = this.state
        const FlexItem = Flex.Item
        return (
            <div id='home'>
                <div className='content'>
                    {/* 头部导航 */}
                    <div className='topnav'>
                        <div className='locationname' onClick={this.clicktitle.bind(this, '#/city')}>成都市▼</div>
                        <div className='navsearch' onClick={this.clicktitle.bind(this, '#/search')}>
                            <img src={require('../../../assets/images/icon_search.png')} />
                            <label>热门房产楼盘</label>
                        </div>
                        <img className='location' src={require('../../../assets/images/location.png')} onClick={this.clicktitle.bind(this, '#/citymap')}></img>
                    </div>
                    {/* 轮播 */}
                    <div className='banner'>
                        <Carousel
                            autoplay={false}
                            infinite
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={require(`../../../assets/images/${val}.jpg`)}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: '176px' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </div>
                    {/* 应用导航 */}
                    <div className='appnav'>
                        <a href='/#'>
                            <div>
                                <span className='item1'>
                                    <img src={require('../../../assets/images/house1.png')} />
                                </span>
                                <p>新房</p>
                            </div>
                        </a>

                        <div>
                            <span className='item2'>
                                <img src={require('../../../assets/images/house2.png')} />
                            </span>
                            <p>二手房</p>
                        </div>
                        <div>

                            <span className='item3'>
                                <img src={require('../../../assets/images/house3.png')} />
                            </span>
                            <p>租房</p>
                        </div>
                        <div>
                            <span className='item4'>
                                <img src={require('../../../assets/images/house4.png')} />
                            </span>
                            <p>商铺</p>
                        </div>
                    </div>

                    <div className='appnav'>
                        <div>
                            <span className='item5'>
                                <img src={require('../../../assets/images/house5.png')} />
                            </span>
                            <p>买房</p>
                        </div>
                        <div>
                            <span className='item6'>
                                <img src={require('../../../assets/images/house6.png')} />
                            </span>
                            <p>海外房产</p>
                        </div>
                        <div>
                            <span className='item7'>
                                <img src={require('../../../assets/images/house7.png')} />
                            </span>
                            <p>小区房价</p>
                        </div>
                        <div>
                            <span className='item8'>
                                <img src={require('../../../assets/images/house8.png')} />
                            </span>
                            <p>问答</p>
                        </div>

                    </div>
                    {/* 背景取色 */}
                    <div style={{ background: '#F5F5F9', height: '10px' }}></div>
                    {/* 房产全百科 */}
                    <div className='function'>
                        <span>
                            <img src={require('../../../assets/images/purse.png')}></img>
                            <p>我要贷款</p>
                        </span>
                        <span>
                            <img src={require('../../../assets/images/calculator.png')}></img>
                            <p>房贷计算</p>
                        </span>
                        <span>
                            <img src={require('../../../assets/images/knowledge.png')}></img>
                            <p>知识</p>
                        </span>
                        <span>
                            <img src={require('../../../assets/images/scan.png')}></img>
                            <p>扫一扫</p>
                        </span>

                    </div>
                    {/* 背景取色 */}
                    <div style={{ background: '#F5F5F9', height: '10px' }}></div>
                    {/* 猜你喜欢 */}
                    <div className='guess-like'>
                        <p>猜你喜欢</p>
                        <div className='list'>
                            {
                                houselist.map((val, i) => {
                                    return <div className='item' key={i}>
                                        <img src={IP + val.imgs} />
                                        <div className='details'>
                                            <h4>{val.name}</h4>
                                            <p>{val.area} </p>
                                            <p>{val.type} {val.point}平 </p>
                                        </div>
                                        <strong>{val.price}/平</strong>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div >
        )
    }
    componentDidMount() {
        gethouselist().then(data => {
            this.setState({
                houselist: data.data,
            })
        })
        // 引用better-scroll
        new BScroll('#home', {
            click:true
        })

    }
    // 头部地图跳转
    clicktitle(href) {
        window.location.href = href
    }

    componentWillUnmount() {
        // 卸载异步操作设置状态
        this.setState = (state, callback) => {
            return
        }
    }

}
