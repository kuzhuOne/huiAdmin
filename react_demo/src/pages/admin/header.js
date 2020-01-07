import React, { Component } from 'react'
import { Menu, Dropdown, Icon ,notification} from 'antd';
import styles from './header.module.less'
import {UserLogout}  from '../../api/user'
import {clear} from '../../utils/webStorage'
const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          咨询
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          产品
        </a>
      </Menu.Item>
      <Menu.Item>        
        <a target="_blank" rel="noopener noreferrer" href="#">
          用户
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          图片
        </a>
      </Menu.Item>
    </Menu>
  );
  const menuData=[
    {path:'',name:'个人信息',icon:'user'},
    {path:'',name:'切换用户',icon:'user'},
    {path:'',name:'退出登录',icon:'user'},
  
  ]
  const openNotificationWithIcon =(type,msg) => {
    notification[type]({
      message: '退出结果',
      description:msg,
      duration:1
    });
  };
class Header extends Component {
  clickMenu=(e)=>{
    let {key}=e 
    console.log(key)
    switch (Number(key)) {
      case 2:
       //退出登录 
       //调用接口
       //删除本地数据
       // 去不去登录页面随意 
       UserLogout()
       .then((res)=>{
         clear() 
         openNotificationWithIcon('success','退出成功')
       })
       .catch((err)=>{
     
         openNotificationWithIcon('error','退出失败请重试')
       })
        break;
    
      default:
        break;
    }
   }  
  renderMenu(menuData){
    return(
      <Menu onClick={this.clickMenu}>
        {menuData.map((item,index)=>{
          return(
              <Menu.Item key={index}>
                <span>
                  <Icon type='user'></Icon>  
                  <span>{item.name}</span>
                </span>
              </Menu.Item>
          )
        })}
      </Menu>
    )
  }
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.header_left}>
                    <div>后台管理系统</div>
                    <Dropdown overlay={menu}>
                        <a className={styles.ant} href="#">
                            +新增 <Icon type="caret-down" />
                        </a>
                    </Dropdown>
                </div>
                <div className={styles.header_right}>
                    <div>超级管理员</div>
                    <Dropdown overlay={this.renderMenu(menuData)}>
                        <a className={styles.ant} href="#">
                           admin<Icon type="caret-down" />
                        </a>
                    </Dropdown>
                    {/* <Icon type="Hui-iconfont"/> */}
                    <span>信息</span>
                    <Icon type="user"/>
                </div>
            </div>
        )
    }
}
export default Header