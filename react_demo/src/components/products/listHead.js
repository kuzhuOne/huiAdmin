import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd';
import styles from './product.module.less' 

class ListHead extends Component{
    constructor(){
        super()
        this.state={
            visible: false
        }
    }
    render(){
        return(
            <div>
                <Form layout="inline">
                    <Form.Item>
                        <Input
                        type="text"
                        placeholder='分类名称'
                        />
                
                    </Form.Item>

                    <Form.Item >
                        <Input
                        type="text"
                        />
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        上传logo
                    </Button>
                    </Form.Item>
                    <Form.Item >
                        <select style={{width:150,height:33,borderColor:"#ccc"}}>
                            <option>国内品牌</option>
                            <option>国外品牌</option>
                        </select>
                    </Form.Item>
                    <Form.Item>
                        <Button  htmlType="submit" style={{background:'rgb(2, 163, 75)',color:"#fff"}} >
                            <Icon type='plus'></Icon>
                            添加
                        </Button>
                    </Form.Item>
                </Form>

                <div className={styles.allDel}>
                    <Button type="danger" block className={styles.left}>
                        <Icon type="delete"></Icon>
                        批量删除
                    </Button>
                    <span className={styles.right}>共有数据：{this.props.Counts}条</span>
                </div>
            </div>
        )
    }
}

export default withRouter(ListHead)