import React, {Component} from 'react';
import { Table } from 'antd';
import {GetDownloadList} from '../../api/download'
const columns = [
	{
		title: 'ID',
		dataIndex:'id'
	},
	{
		title: '用户名',
		dataIndex:'username'
	},
	{
		title: 'IP',
		dataIndex:'ip'
	},
	{
		title: '访问时间',
		dataIndex:'time'
	},
]

// const dataSource = [
// 	{id:'1',username:'yuyu',ip:'10.6.5.2',time:'20:00'},
// 	{id:'2',username:'yuyu',ip:'10.6.5.2',time:'20:00'},
// 	{id:'3',username:'yuyu',ip:'10.6.5.2',time:'20:00'}
// ]
  
class DownloadList extends Component {
	constructor() {
		super()
		this.state = {
			dataSource: []
		}
	}
	componentDidMount(){
		GetDownloadList(1,4)
		.then((res)=>{
			console.log(res)
		})
	}
	render() {
		let { dataSource } = this.state
		return (
			<div>
				<Table columns={columns}
					dataSource={dataSource}
					rowKey='id'></Table>
			</div>
		)
	}
}

export default DownloadList;