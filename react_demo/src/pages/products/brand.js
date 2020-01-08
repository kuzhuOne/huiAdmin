import React,{Component} from 'react'
import { Table } from 'antd';
import {getData} from '../../api/products'

const columns = [
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
  ];


  
class Brand extends Component{
    constructor(){
        super();
        this.state={
            renderData:[]
        }
    }
    componentDidMount(){
        getData().then((data)=>{
            let Data= data.list.Products;
            let result = Data.map((item,index)=>{
                let {name,img,desc}=item
                let obj={name,img,desc}
                obj.id=index+1;
                obj.sort=index+1;

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
                <Table columns={columns} dataSource={renderData} />
            </div>
        )
    }
}
export default Brand