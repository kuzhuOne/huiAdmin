import React,{Component} from 'react'
import styles from './admin.module.less'
import { Layout, Menu,  Icon } from 'antd';
import HeaderNav from '../admin/header'
import SliderNav from '../../components/sliderNav/sliderNav'
import Breadcrumb from '../../components/breadcrumb';
import {HashRouter, NavLink} from "react-router-dom";

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

                <Breadcrumb/>
                <Content
                  style={{
                    background: '#fff',
                    padding: 10,
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