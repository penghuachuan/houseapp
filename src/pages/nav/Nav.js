import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import './nav.scss'
// 引入二级路由
import Home from './home/Home'
import Chat from './chat/Chat'
import History from './history/History'
import My from './my/My'
export default class Nav extends Component {
    state = {
        selectedTab: 'blueTab',
        hidden: false,
        navlist: [
            { title: '首页', key: 'Home', icon: 'icon_house', selectedIcon: 'icon_house1', selected: 'blueTab'},
            { title: '微聊', key: 'Chat', icon: 'icon_chat', selectedIcon: 'icon_chat1', selected: 'redTab'},
            { title: '足迹', key: 'History', icon: 'icon_history', selectedIcon: 'icon_history1', selected: 'greenTab'},
            { title: '我的', key: 'My', icon: 'icon_my', selectedIcon: 'icon_my1', selected: 'yellowTab'}
        ]
    };
    renderContent(pageText) {
        switch (pageText) {
            case 'Home':
                return <Home />
            case 'Chat':
                return <Chat />
            case 'History':
                return <History />
            case 'My':
                return <My />
        }

    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {
                        this.state.navlist.map((val, i) => {
                            return <TabBar.Item
                                        title={val.title}
                                        key={val.key}
                                        icon={<div style={{
                                            width: '22px',
                                            height: '22px',
                                            background: `url(${require('../../assets/images/'+val.icon+'.png')}) center center /  21px 21px no-repeat`
                                        }}
                                        />
                                        }
                                        selectedIcon={<div style={{
                                            width: '22px',
                                            height: '22px',
                                            background: `url(${require('../../assets/images/'+val.selectedIcon+'.png')}) center center /  21px 21px no-repeat`
                                        }}
                                        />
                                        }
                                        selected={this.state.selectedTab === val.selected}
                                        onPress={() => {
                                            this.setState({
                                                selectedTab: val.selected,
                                            });
                                        }}
                                    >
                                        {this.renderContent(val.key)}
                                    </TabBar.Item>
                        })

                    }
                </TabBar>
            </div>
        );
    }

}
