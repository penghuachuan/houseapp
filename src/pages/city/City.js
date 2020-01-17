import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './city.scss'
import Citylist from '../../assets/json/citylist.json'
console.log(Citylist)
export default class City extends Component {
    state={
        isshow:false,
        showletter:'A'
    }
    render() {
        return (
            <div id='city'>
                <div className='citylisy_left' id='citylist'>
                    <div className='content'>
                        {
                            Citylist.map((v, i) => {
                                return <div className='list_item' key={i} id={v.title}>
                                    <h3>{v.title}</h3>
                                    <div>
                                        {
                                            v.child.map((val, k) => {
                                                return <p key={k}>{val}</p>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
                <div className='citylisy_right' onTouchMove={this.rightTouch.bind(this)} onTouchEnd={this.rightTend.bind(this)}>
                    {
                         Citylist.map((v, i) => {
                            return <p key={i} onClick={this.titleclick.bind(this,v.title)} className='title_sel'>{v.title}</p>
                         })
                    }
                </div>
                <div className={this.state.isshow ? 'show_letter': '' } >
                    {this.state.showletter}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.left_list = new BScroll('#citylist', {
            click: true
        })
    }
    titleclick(title){
        this.left_list.scrollToElement('#'+title)
    }
    rightTouch(e){
        // console.log(e.touches[0].clientX,e.touches[0].clientY)
        let tdiv=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)
        if(tdiv.className==='title_sel'){
            this.left_list.scrollToElement('#'+tdiv.innerHTML)
            this.setState({
                showletter:tdiv.innerHTML,
                isshow:true
            })
          
        }
    }
    rightTend(e){
        // let tdiv=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)
        console.log(e)
        // if(tdiv.className==='title_sel'){
          
        //     setTimeout(()=>{
        //         this.setState({
        //             isshow:false
        //         })
        //     },1000)
        // }
    }
}
