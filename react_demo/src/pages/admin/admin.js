import React,{Component,Fragment} from 'react'
import styles from './admin.module.less'
import { Layout, Menu,  Icon ,Modal} from 'antd';
import HeaderNav from '../admin/header'
import ActionCreator from '../../store/actionCreator'
import SliderNav from '../../components/sliderNav/sliderNav'
import Breadcrumb from '../../components/breadcrumb';
import {HashRouter, NavLink,withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
const { Header, Content, Sider } = Layout;


class Admin extends Component{
    render(){
      let {tokenModal,setTokenModal} =this.props
        return(
          <Fragment>
              <Layout className={styles.admin}>
                <HeaderNav></HeaderNav>
              <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                  <SliderNav></SliderNav>
                </Sider>

                <Layout style={{ padding: '0 24px 24px' }}>
                  <Breadcrumb />

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
            <Modal
            title='提示'
            visible={tokenModal}
            onOk={()=>{ 
              this.props.history.replace('/login')
              setTokenModal(false)
            }}
            onCancel={()=>{
              setTokenModal(false)
            }}
            >
              请重新登录
            </Modal>
          </Fragment>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(withRouter(Admin))