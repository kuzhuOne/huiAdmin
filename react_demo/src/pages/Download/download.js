import React, {Component,Fragment} from 'react';
import { Table , Pagination ,Spin,Button,Popconfirm, message,Drawer,Input } from 'antd';
import {GetDownloadList,DelDownloadList,GetKeyWord} from '../../api/download'
import UpdateDownloadList from './Update/Update'
import Search from 'antd/lib/input/Search';
// var columns = 

// const dataSource = [ 
// 	{id:'1',username:'yuyu',ip:'10.6.5.2',time:'20:00'},
// 	{id:'2',username:'yuyu',ip:'10.6.5.2',time:'20:00'},
// 	{id:'3',username:'yuyu',ip:'10.6.5.2',time:'20:00'}
// ]
const pageSize = 4
class DownloadList extends Component {
	constructor() {
		super()
		this.columns=[
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
			{
				title: 'URL',
				dataIndex:'url'
			},
			{
				title: '操作',
				render:(data)=>{
					return(
						<Fragment>
							<Popconfirm
							title='确定删除本条数据吗'
							onConfirm={()=>{
								console.log(data,this)
								this.delData(data._id)
							}}
							okText='删除'
							cancelText='取消'
							>
								<Button type='danger' size='small'>删除</Button>
							</Popconfirm>
							
							<Button type='primary' size='small' onClick={()=>{
								this.setState({drawerShow:true,updateInfo:data})
							}}>修改</Button>
						</Fragment>
					)
				}
			},
		]
		this.state = {
			drawerShow:false,
			spinning:false,
			nowPage:1,//当前页数
			allCount:0,//总数据条数
			dataSource: [],
			updateInfo:{},
		}
	}
	componentDidMount(){
		this.getTableData(1)
	}
	delData(id){		
		DelDownloadList(id)
		.then(()=>{
			console.log(id)
			message.success('删除成功',1)
			this.getTableData()
		})
	}
	getTableData(nowPage=1){
		//根据页数获取网络数据
		this.setState({spinning:true})
		GetDownloadList(nowPage,pageSize)
		.then((res)=>{
			console.log(res)
			this.setState({dataSource:res.list.foods,allCount:res.list.allCount,spinning:false})
		})
	}
	getByKey(value){
		GetKeyWord(value,1,4)
		.then((res)=>{
			console.log(value)
			message.success('查询成功')
			this.setState({dataSource:res.list.foods,allCount:res.list.allCount,spinning:false})
		})
	}
	render() {
		let { dataSource ,allCount,spinning,drawerShow,updateInfo} = this.state
		return (
			<div>

				<Spin spinning={spinning}>
					<div>
						<Search style={{ width:300 }}
						placeholder="请输入您要搜索的内容"
						onSearch={(value) => {
							this.getByKey(value)
						}}
						></Search>
					</div>
				<Table columns={this.columns}
					dataSource={dataSource}
					rowKey='id'
					pagination={false}
				></Table>
				</Spin>
				<Pagination simple 
				total={allCount} 
				pageSize={pageSize} 
				onChange={(page)=>{
					console.log('目标页数',page)
					this.getTableData(page)
				}}
				/>
				<Drawer
				closable={false}
				onClose={()=>{
					this.setState({drawerShow:false})
				}}
				visible={drawerShow}
				>
					<UpdateDownloadList updateInfo={updateInfo} refreshList={()=>{
						this.setState({drawerShow:false})
						this.getTableData()
					}}></UpdateDownloadList>
				</Drawer>
			</div>
		)
	}
}

export default DownloadList;