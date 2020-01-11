import React,{Component} from 'react'
import styles from './product.module.less'
import {Form,Input,Tooltip,Icon,Cascader,Select,Row,Col,Checkbox, Button,AutoComplete, Divider, } from 'antd';

class AddList extends Component{
    constructor(){
        super()
    }
   
    render(){
        return(
           <div className={styles.add}>
               添加
           </div>
        )
    }
}

export default AddList