import React,{Component} from 'react'
import styles from './admin.module.less'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import HeaderNav from '../admin/header'
import SliderNav from '../../components/sliderNav/sliderNav'

const { Header, Content, Sider } = Layout;


class Admin extends Component{
    render(){
        return(
            <Layout className={styles.admin}>
              <HeaderNav></HeaderNav>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <SliderNav></SliderNav>
              </Sider>

              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>资讯管理</Breadcrumb.Item>
                  <Breadcrumb.Item>资讯列表</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                 {this.props.children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}
export default Admin