import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, Checkbox,message } from 'antd'
import styles from './login.module.less'
import {setItem} from '../../utils/webStorage'
import {UserLogin} from '../../api/user'




class Login extends Component {
    login=()=>{
        let {getFieldsValue,getFieldDecorator,validateFields}=this.props.form
        validateFields((err,data)=>{
        //  console.log(err,data)
         //err 前端的字段验证 true 不通过 null 没问题
         if(err) return  message.error('输入有误,请重试!',1)
         //字段验证ok 继续向下
         let {us,ps,token} =data
         console.log(data)
         UserLogin(us,ps,token)
         .then((res)=>{
           console.log('then',res)
           setItem('token',res.token)
           setItem('uid',res.uid)
           console.log("token")
        //    setItem('rootIds',res.rootList)
           message.success('登录成功，1s后跳转首页',1,()=>{
             this.props.history.replace('/admin')
           })
         })
         .catch((err)=>{
           message.error('登录失败请重试',1)
           console.log(err)
         })
        })
        // let result =getFieldsValue()
        // console.log(result)
      }
    render() {
        let {getFieldDecorator} = this.props.form
        return (
            <div className={styles.login}>
      <Card  title='用户登录' className={styles['login-card']}>
        <Form.Item>   
          {getFieldDecorator('us',{
            rules: [{ required: true, message: '用户名不能为空!' },
                    { min:3, message: '用户名不能小于3位字符!' },
                    { max:9, message: '用户名不能大于9位字符!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="Username"
            />
          )}  
        </Form.Item>
        <Form.Item>   
          {getFieldDecorator('ps',{
            rules:[{required:true,message:'用户密码不能为空'}]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}  
        </Form.Item>
            <Form.Item>
              <Checkbox>自动登录</Checkbox><Checkbox>记住密码</Checkbox>
              <br></br>
              <Button type="primary" onClick={this.login}>
               登录
              </Button>
              <br></br>
              <Button type="primary">
               立即注册
              </Button>
            </Form.Item>
        </Card> 
    </div>
           
        )
    }
}
export default Form.create()(Login)