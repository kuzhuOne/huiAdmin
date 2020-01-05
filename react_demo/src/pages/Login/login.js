import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd'
import styles from './login.module.less'
class Login extends Component {
    render() {
        return (
            <div className={styles.login}>
                11111
            <Card  title='用户登录' className={styles['login-card']}>
                <Form  className="login-form">

                    <Form.Item>
                    <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text"
                            placeholder="name"
                        />
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />

                    </Form.Item>
                    <Form.Item>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Card>
            </div>
           
        )
    }
}
export default Login