import React,{Component} from 'react'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class HeadNav extends Component{
    render(){
        return(
            <Menu  mode="horizontal" theme="dark">
                 <Menu.Item key="mail">
                    <Icon type="plus"></Icon>
                        H-ui.admin  v3.1
                    <Icon type="down"></Icon> 
                </Menu.Item>
                <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                        新增
                    </span>
                }
                >
                    <Menu.Item key="setting:1">资讯</Menu.Item>
                    <Menu.Item key="setting:2">图片</Menu.Item>
                    <Menu.Item key="setting:3">产品</Menu.Item>
                    <Menu.Item key="setting:4">用户</Menu.Item>
                </SubMenu>  
            </Menu>
        )
    }
}

export default HeadNav