import React,{Component} from 'react'
import { Table ,Divider, Icon,Pagination} from 'antd';
import {getData,delData} from '../../api/products'
import ListHead from '../../components/products/listHead'
import {BrowserRouter} from 'react-router-dom';




  
class Brand extends Component{
    constructor(){
        super();
        this.state={
            renderData:[],
            allCount:0
        }
        this.columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: '排序',
            dataIndex: 'sort',
        },
        {
            title: 'LOGO',
            dataIndex: 'img',
        },
        {
            title: '品牌名称',
            dataIndex: 'name',
        },
        {
            title: '具体描述',
            dataIndex: 'desc',
        },
        {
            title: '操作',
            
            render: (data) => {
                // console.log(data)
                return(
                    <span>
                <Icon type="edit"></Icon>
                <Divider type="vertical" />
                <Icon type="delete" onClick={()=>{
                    this.delData(data.id)
                }
                }></Icon>
            </span>
                )
            }
        },
    ];
}
    delData(productId){
        delData(productId).then((res)=>{   
            this.getTableData()
        })
    }
    getTableData(nowPage=1){
        getData(nowPage,5).then((data)=>{
            // console.log(data)
            let Data= data.list.Products;
            let result = Data.map((item,index)=>{
                let {name,img,desc}=item
                let obj={name,img,desc}
                obj.id=item._id;
                obj.sort=index+1;

                return obj
            })
            // console.log( result)
            this.setState({renderData:result})
            this.setState({allCount:data.list.allCount})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    componentDidMount(){
        this.getTableData(1)
    }
    render(){
        let {renderData,allCount} = this.state
        return(
            <div>   
                <ListHead Counts={allCount}></ListHead>
                <Table columns={this.columns} dataSource={renderData} bordered pagination={false}/>
                <Pagination 
                total={allCount} pageSize={5} 
                style={{float:'right',marginTop:10}}
                onChange={(page)=>{
                    console.log('目标页数',page)
                    this.getTableData(page)
                }}
                />
                {this.props.children}
                
            </div>
        )
    }
}
export default Brand