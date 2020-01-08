import React,{Component} from 'react'
import { Table } from 'antd';

const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '留言',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'ID',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: '123',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: '456',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: '789',
  },
];
class CommentList extends Component{
    render(){
        return(
            <Table
    columns={columns}
    dataSource={data}
    bordered
    title={() => 'Header'}
    footer={() => 'Footer'}
  />
        )
    }
}
export default CommentList