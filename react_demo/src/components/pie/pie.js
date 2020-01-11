import React, {Component} from "react"
import Information from '../information/addInformation11'
import {Button, Radio, Icon} from 'antd';
import ReactEcharts from 'echarts-for-react';
class Pie extends React.Component {
    constructor(){
        super()
        this.state={
            option:{
                title: {
                    text: '图表信息',
                    // subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '直接访问'},
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        }
    }
 componentDidMount(){
       setTimeout(()=>{
           let data=[
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
           ]
           let option=JSON.parse(JSON.stringify(this.state.option))
           option.series[0].data=data
           this.setState({option})
       },1000)
 }
  render() {
    const {option} = this.state;
    return (
        <div>
            <ReactEcharts option={option} />
        </div>
    )
  }
}

export default Pie