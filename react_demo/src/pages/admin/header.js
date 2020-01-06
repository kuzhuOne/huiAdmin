import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'antd';
import styles from './header.module.less'
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
  const menu1 = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          个人信息
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          切换账户
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          退出
        </a>
      </Menu.Item>
     
    </Menu>
  );
class Header extends Component {
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
                    <Dropdown overlay={menu1}>
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