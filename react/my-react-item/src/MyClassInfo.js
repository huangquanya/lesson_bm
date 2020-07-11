import React, { Component } from 'react';
import { Tabs } from 'antd'
import 'antd/dist/antd.css';
import Content from './Content'
import { get } from 'axios'
import './mock/data.js'
import { changeConfirmLocale } from 'antd/lib/modal/locale';

const { TabPane } = Tabs;

class MyClassInfo extends Component {
    constructor(){
        super();
        this.state={
            alist:[],
            size: 'large',
            list: [
              {
                finish: true,
                id: "610000197411091214",
                image: "http://dummyimage.com/200*100/FFC0CB&text=HELLO",
                key: 1,
                learned: true,
                lession: "观院集系",
                index:1,
                title: "Esfrktu",
              }
            ]
        }
    }
    componentWillMount() {
      get('/data/')
        .then(res => {
          console.log(res.data.list)
          this.setState({
            list: res.data.list,
            alist: res.data.list
          })
        })
        
  }
  topChange(i){
      if(i==2){
        
        let newList = this.state.list.filter((i)=>i.learned===true)
        console.log(newList)
        this.setState({
          alist:newList
        })
      }else if(i == 3){
        let newList = this.state.list.filter((i)=>i.learned===false)
        console.log(newList)
        this.setState({
          alist:newList
        })
      }
  }

    render() { 
        const {size,alist} = this.state;
        const all = this.state.list.length
        const learned = this.state.list.filter((i)=>i.learned===true).length
        const unLearn = this.state.list.filter((i)=>i.learned===false).length

        return ( 
            <div>
        <Tabs defaultActiveKey="1" size={size} style={{ marginBottom: 32}} onChange={this.topChange.bind(this)}>
          <TabPane tab={"全部"+all} key="1"></TabPane>
          <TabPane tab={"未学完"+learned} key="2"></TabPane>
          <TabPane tab={"已学完"+unLearn} key="3"></TabPane>
        </Tabs>
        <Tabs defaultActiveKey="1" type="card" size={size}>
          <TabPane tab="所有形式" key="1">
            <Content list={this.state.alist.filter(i=>i.all===1)}/>
          </TabPane>
          <TabPane tab="专栏" key="2">
            <Content list={this.state.alist.filter(i=>i.index===2)}/>
          </TabPane>
          <TabPane tab="视频课" key="3">
            <Content list={this.state.alist.filter(i=>i.index===3)}/>
          </TabPane>
          <TabPane tab="微课" key="4">
            <Content list={this.state.alist.filter(i=>i.index===4)}/>
          </TabPane>
          <TabPane tab="每日一课" key="5">
            <Content list={this.state.alist.filter(i=>i.index===5)}/>
          </TabPane>
          <TabPane tab="其他" key="6">
            <Content list={this.state.alist.filter(i=>i.index===6)}/>
          </TabPane>
        </Tabs>
      </div>
         );
    }
}
 
export default MyClassInfo;