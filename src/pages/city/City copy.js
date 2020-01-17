import React, { Component } from "react";
import AMapJS from "amap-js";
import './city.scss'
class City extends Component {

    componentDidMount() {
        const aMapJSAPILoader = new AMapJS.AMapJSAPILoader({
            v: "1.4.12",
            key: "ac2a89e99d35f76aa0eed0b141123c0f"
        });

        const aMapUILoader = new AMapJS.AMapUILoader({
            v: "1.0" // UI组件库版本号
        });

        aMapJSAPILoader.load().then(AMap => {
            aMapUILoader.load().then(initAMapUI => {
                const AMapUI = initAMapUI(); // 这里调用initAMapUI初始化并返回AMapUI
                // 其他逻辑
                console.log(AMap);
                console.log(AMapUI);
                new AMap.Map(this.refs.map);
                //设置DomLibrary
                // AMapUI.setDomLibrary(Zepto);

                //加载MobiCityPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
                AMapUI.loadUI(['misc/MobiCityPicker'], function (MobiCityPicker) {

                    var cityPicker = new MobiCityPicker({
                        //topGroups: ..., // 顶部城市列表
                    });
                    //监听城市选中事件
                    cityPicker.on('citySelected', function (cityInfo) {
                        //隐藏城市列表
                        cityPicker.hide();

                        //选中的城市信息
                        console.log(cityInfo);
                    });
                    cityPicker.on('hide',()=>{
                        window.history.go(-1)
                    })                                                                                                                                                             
                    //显示城市列表，可以用某个click事件触发
                    cityPicker.show();
                });
            });
        })


    }

    render() {
        return (
            <div className="city">
                <div ref="map" id="map"></div>
            </div>
        );
    }

}

export default City;
