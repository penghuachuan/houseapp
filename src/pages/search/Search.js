import React, { Component } from 'react'
import './search.scss'
export default class Search extends Component {
    state={
        searchContent:'',
        select:'新房',
        findlist:[
            '南湖国际社区','龙城一号','天府新谷','恒大半岛','旺达集团','龙城一号','天府新谷','恒大半岛','旺达集团'
        ],
        searchHistory:['1'],
        ishow:'none'
    }
    render() {
        let { searchContent , findlist , select , searchHistory , ishow }=this.state
        return (
            <div className='search'>
                <div className='search-header'>
                    <img className='goback' src={ require('../../assets/images/search_left.png')} onClick={this.goback}/>
                    <div className='search_text'>
                        <select value={select} onChange={e=>{this.setState({select:e.target.value})}}>
                            <option value='新房'>新房</option>
                            <option value='二手房'>二手房</option>
                        </select>
                        <form>
                              <img src={require('../../assets/images/icon_search.png')} />
                                <input type='text' placeholder='请输入小区名或商圈名' value={searchContent} onChange={e=>{this.setState({searchContent:e.target.value})}} onBlur={this.gettext} />
                        </form>
                    </div>
                </div>
                <div className='search_main' style={{display:ishow}}>
                    <h4>搜索历史</h4>
                    <div className='search_tag'>
                        {   
                            searchHistory.map((v,i)=>{
                                return <span className='find_item' key={i}>
                                    {v}
                                </span>
                            })
                        }
                    </div>
                </div>
                <div className='search_main'>
                    <h4>搜索发现</h4>
                    <div className='search_tag'>
                        {
                            findlist.map((v,i)=>{
                                return <span className='find_item' key={i}>
                                    {v}
                                </span>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    goback=()=>{
        window.history.go(-1)
    }
    gettext=(e)=>{
        // 获取本地记录，没有设置为空数组
        let historylist=JSON.parse(localStorage.getItem('details')) || []
        if(e.target.value==="") {return}
        historylist.unshift(e.target.value)
        historylist=JSON.stringify(historylist)
        localStorage.setItem('details',historylist)
    }
    componentDidMount(){
        let historylist=JSON.parse(localStorage.getItem('details')) || []
        if(historylist.length>0){
            this.setState({
                ishow:'block',
                searchHistory:historylist
            })
        }
    }
}
