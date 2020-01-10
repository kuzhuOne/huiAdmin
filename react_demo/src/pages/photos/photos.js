import React,{Component,Fragment} from 'react'
import {Table, Icon, Switch, Radio, Form, Divider, Button, Dropdown, Menu, Input, Select,Popconfirm,Pagination} from 'antd';
import {getMations} from '../../api/mations'
import Add from "../../components/mations"
const { Option } = Select;

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: '分类',
        dataIndex: 'classification',
    },
    {
        title: '封面',
        dataIndex: 'cover',
    },
    {
        title: '图片名称',
        dataIndex: 'name',
    },
    {
        title: 'tags',
        dataIndex: 'tags',
    },
    {
        title: '更新事件',
        dataIndex: 'desc',
    },
    {
        title: '发布状态',
        dataIndex: 'desc',
    },
    {
        title: '操作',
        dataIndex: 'desc',
        render:(data)=> {
            console.log(data,222222)
            return(
              <Fragment>
                {data==0?<a onClick={this.changeState
  
                }>下架</a >:<a>发布</a>}
  
                <Icon type="edit" />
                <Icon type="delete"/>
  
              </Fragment>
            )
          },
    },
  ];


  
class Photos extends Component{
    constructor(){
        super();
        this.state = {
            drawerShow: false,
            spinning: false,
            nowPage: 1, //当前页数
            pageSize:5,
            allCount: 50, // 总数据条数
            dataSource: [],
            updataInfo: {},
            pagination:{onChange: (page)=>{console.log(33333,this)
                // this.getTableData(page)
            }}
          }
    }
    componentDidMount(){
        getMations().then((data)=>{
            let Data= data.list.foods;
            let result = Data.map((item,index)=>{
                let {id,tags,cover,classification}=item
                let obj={id,tags,cover,classification}
                obj.id=index+1;
                // obj.sort=index+1;

                return obj
            })
            // console.log( result)
            this.setState({renderData:result})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        let {renderData} = this.state
        return(
            <div>
                 <Add></Add>
                <Table columns={columns} dataSource={renderData} />
            </div>
        )
    }
}
export default Photos