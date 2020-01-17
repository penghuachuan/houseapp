import React, { Component } from 'react'
import { Map, Marker } from 'react-amap'
import './map.scss'
export default class Mapcity extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const plugins = [
            'MapType',
            'Scale',
            'OverView',
            'ControlBar', // v1.1.0 新增
            {
                name: 'ToolBar',
                options: {
                    visible: true,  // 不设置该属性默认就是 true
                    onCreated(ins) {
                        console.log(ins);
                    },
                },
            }
        ]
        return <div style={{ width: '100%', height: '400px' }} className='citymap'>
            <label className='goback' onClick={this.goback}>
                <img src={require('../../assets/images/icon_left.png')} />
            </label>
            <Map
                plugins={plugins}
                amapkey={'ac2a89e99d35f76aa0eed0b141123c0f'}
            />
        </div>
    }
    componentDidMount() {


    }
    goback=()=>{
        window.history.go(-1)
    }
}

