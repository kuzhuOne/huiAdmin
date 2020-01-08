import React, {Component,Fragment} from 'react';
import { Table , Pagination ,Spin,Button,Popconfirm, message,Drawer} from 'antd';
import {UpdateList} from '../../../api/download'
class UpdateDownloadList extends Component {
	constructor(props) {
		super()
		this.state={...props.updateInfo}
		console.log(this)
	}	
	componentWillReceiveProps(props){
		console.log('props改变',props)
		this.setState({...props.updateInfo})
	}
	submit=()=>{		
		UpdateList(this.state).then((data)=>{
			message.success('修改成功')
			this.props.refreshList()
		})
		console.log(this.state)
	}
	render() {
		let {_id,username,ip,time,url} = this.state
		return (
			<Fragment>
				id:{_id}<br/>
				用户名:<input type='text' value={username} onChange={(e)=>{
					this.setState({username:e.target.value})
				}}></input><br/>
				IP:<input type='text' value={ip} onChange={(e)=>{
					this.setState({ip:e.target.value})
				}}></input><br/>
				访问时间:<input type='text' value={time} onChange={(e)=>{
					this.setState({time:e.target.value})
				}}></input><br/>
				URL:<input type='text' value={url} onChange={(e)=>{
					this.setState({url:e.target.value})
				}}></input><br/>
				<Button type='primary' onClick={this.submit}>修改</Button>
			</Fragment>
		)
	}
}

export default UpdateDownloadList;