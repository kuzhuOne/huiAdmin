import React from "react"
import styles from "./admin.module.scss"
/**
 *npm install antd
 * import语句应该放在最前面，至少要放到const定义变量的前面。
 *npm install node-sass
 */
import SliderNav from "../../components/SliderNav/SliderNav"
import {Layout,Icon,Modal} from "antd"
const {Header,Sider,Content,Footer}=Layout

class Admin extends React.Component{
  render(){
    return (
      <>
        <Layout>
          <Sider>
            <SliderNav></SliderNav>
            <div className={styles.admin}>
              这是gu页
              {this.props.children}
            </div>
          </Sider>
        </Layout>


      </>

    );
  }

}

export default Admin;
