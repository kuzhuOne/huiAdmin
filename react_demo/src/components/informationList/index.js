import React, {Component,Fragment} from "react"
import {Table, Icon, Switch, Radio, Form, Divider, Button, Dropdown, Menu, Input, Select,Popconfirm,Pagination} from 'antd';
import {GetInformation,DelInformation} from "../../api/information"
const { Option } = Select;
class App extends React.Component {
  constructor() {
    super()
    this.columns = [
      {
        title: 'ID',
        dataIndex: '_id',
        key: 'ID',
        sorter: (a, b) => a.ID - b.ID,
        ellipsis: true,
      }, {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        sorter: (a, b) => a.ID - b.ID,
        ellipsis: true,
      }, {
        title: '分类',
        dataIndex: 'type',
        key: 'type',
        sorter: (a, b) => a.ID - b.ID,
        ellipsis: true,
      },
      {
        title: '来源',
        dataIndex: 'source',
        key: 'source',
        sorter: (a, b) => a.ID - b.ID,
        ellipsis: true,
      },
      {
        title: '更新时间',
        dataIndex: 'time',
        key: 'time',
        sorter: (a, b) => a.ID - b.ID,
        ellipsis: true,
      },
      {
        title: '浏览次数',
        dataIndex: 'num',
        key: 'num',
        sorter: (a, b) => a.ID - b.ID,
        ellipsis: true,
      },
      {
        title: '发布状态',
        dataIndex: 'state',
        key: 'state',
        sorter: (a, b) => a.ID - b.ID,
        ellipsis: true,
        render:(data)=>{
          console.log(data)
          return(
            <Fragment>
              {data==0?<Button style={{background:"green",color:"#fff"}}>已发布</Button >:<Button style={{background:"green",color:"#fff"}}>草稿</Button>}
            </Fragment>
          )
        }
      },
      {
        title: '操作',
        key:"zzz",
        render:(data)=> {
          console.log(data,222222)
          return(
            <Fragment>
              {data==0?<a onClick={this.changeState

              }>下架</a >:<a>发布</a>}

              <Icon type="edit" />
              <Icon type="delete" onClick={()=>{
                this.delData(data._id)
              } }/>

            </Fragment>
          )
        },
      },
    ];
    this.state = {
      drawerShow: false,
      spinning: false,
      nowPage: 1, //当前页数
      pageSize:5,
      allCount: 50, // 总数据条数
      dataSource: [],
      updataInfo: {},
      pagination:{onChange: (page)=>{console.log(33333,this)
          this.getTableData(page)
      }}
    }

  }
componentDidMount(){
  this.getTableData(1)
  this.props.info(22)
}
delData(id){
  //  网络请求
  console.log(id)
  DelInformation(id).then((res)=>{
    // message.success('',1)
    if(res.err==0){
      alert("删除ok")
    }
    this.getTableData()
  })

  // 更新页面数据
}
getTableData(nowPage=1,){
  // 根据页数获取网络数据
  this.setState({spinning:true})
  console.log(nowPage,this.state.pageSize)
  GetInformation(nowPage,this.state.pageSize)
    .then((res)=>{
      console.log(res)
      const pagination = { ...this.state.pagination };

      pagination.total =res.list.allCount
      pagination.pageSize=this.state.pageSize
      this.setState({dataSource:res.list.foods,allCount:res.list.allCount,spinning:false,pagination,})
    })
}
changeState(state){
    console.log(111)
}
  render() {
    let {sortedInfo, filteredInfo,pageSize,allCount,pagination} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};


    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <div>
        <div style={{display:"flex",justifyContent:"space-between",justifyItems:"center",height:'50px'}}>
          <div>显示<Select defaultValue="5" onChange={(value,option)=>{
            console.log(value,option)
            // this.setState({pageSize:option.props.children},)
            this.setState({
              pageSize:option.props.children
            },()=>{
              console.log(this.state.pageSize);
              this.getTableData()
            });

          }}>
            <Option value="5">5</Option>
            <Option value="help">10</Option>
            <Option value="newInformation">15</Option>
          </Select>条
          </div>
          <div>
            从当前数据中检索:<Input placeholder="" style={{width: 200}}/>
          </div>
          </div>

        <Table rowKey={row=>row._id} rowSelection={this.rowSelection} columns={this.columns} pagination={pagination}  dataSource={this.state.dataSource} scroll={{ x:1000, y: 270 }} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App