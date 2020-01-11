import React,{Component} from 'react'
import { Table , Pagination ,Spin,Button,Popconfirm, message,Drawer,Input } from 'antd';
import {GetMemberList} from '../../api/memberlist'
class MemberList extends Component{
    constructor(){
        super()
        this.columns=[
            {
				title: 'ID',
                dataIndex:'_id',
                width:120,
                ellipsis:true
			},
			{
				title: '用户名',
				dataIndex:'username'
			},
			{
				title: '性别',
				dataIndex:'sex'
			},
			{
				title: '手机号',
				dataIndex:'phone'
			},
			{
				title: '邮箱',
				dataIndex:'email'
            },
            {
				title: '地址',
				dataIndex:'address'
            },
            {
				title: '加入时间',
				dataIndex:'time'
            },
            {
				title: '状态',
				dataIndex:'status'
            },
        ]
        this.state = {
			dataSource: [],
		}
    }

    componentDidMount(){
		this.getTableData()
	}

    getTableData(){
		//根据页数获取网络数据
		GetMemberList(1,4)
		.then((res)=>{
			console.log(res)
			this.setState({dataSource:res.list.foods,allCount:res.list.allCount})
		})
	}
    render(){
        let { dataSource} = this.state
        return(
            <div>
                <Table 
                columns={this.columns}
                dataSource={dataSource}
				rowKey='_id'
                ></Table>
            </div>
        )
    }
}
export default MemberList