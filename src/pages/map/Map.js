import React, { Component } from 'react'
import './map.scss'

export default class Mapcity extends Component {
    state = {
        currentcity: '定位中'
    }
    render() {
        return (
            /*  */
            <div style={{ width: '100%', height: '400px' }} className='citymap'>
                <label className='goback' onClick={this.goback}>
                    <img src={require('../../assets/images/icon_left.png')} />
                </label>
                <p style={{ textAlign: 'center', margin: 0 }}>当前定位：{this.state.currentcity}</p>
                <div id="container" style={{ width: '100%', height: 400 }}>

                </div>
            </div>
        )
    }
    componentDidMount() {
        let _this = this
        var map = new window.AMap.Map("container", {
            resizeEnable: true,
            // center: [116.397428, 39.90923],
            zoom: 15
        });

        var options = {
            'showButton': true,//是否显示定位按钮
            'buttonPosition': 'LB',//定位按钮的位置
            /* LT LB RT RB */
            'buttonOffset': new window.AMap.Pixel(10, 20),//定位按钮距离对应角落的距离
            'showMarker': true,//是否显示定位点
            'markerOptions': {//自定义定位点样式，同Marker的Options
                'offset': new window.AMap.Pixel(-18, -36),
                'content': '<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
            },
            'showCircle': true,//是否显示定位精度圈
            'circleOptions': {//定位精度圈的样式
                'strokeColor': '#0093FF',
                'noSelect': true,
                'strokeOpacity': 0.5,
                'strokeWeight': 1,
                'fillColor': '#02B0FF',
                'fillOpacity': 0.25
            }
        }
        window.AMap.plugin(["AMap.Geolocation"], function () {
            var geolocation = new window.AMap.Geolocation(options);
            map.addControl(geolocation);
            geolocation.getCurrentPosition()
        });
        // 获取用户所在城市信息
        function showCityInfo() {
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            // 自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;//当前城市
                        var citybounds = result.bounds;// 当前城市坐标
                        // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                        //地图显示当前城市
                        _this.setState({
                            currentcity: cityinfo
                        })
                        // map.setBounds(citybounds);
                    }
                } else {
                    // document.getElementById('info').innerHTML = result.info;
                }
            });
        }
        showCityInfo();
    }
    goback = () => {
        window.history.go(-1)
    }
}
