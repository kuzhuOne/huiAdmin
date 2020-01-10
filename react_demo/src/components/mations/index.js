import React, {Component} from "react"
import Information from '../information/addInformation11'
import {Button, Radio, Icon} from 'antd';
import styles from "./index.module.less"
import {Link,withRouter} from "react-router-dom"
class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({size: e.target.value});
  };

  render() {
    const {size} = this.state;
    return (
      <div className={styles.main} style={{background: "#f5fafe"}}>
        <div className={styles.left}>
          <Button type="danger">批量删除</Button>

          <Button type="primary" icon="download">
            添加
          </Button>
        </div>

        <div className={styles.right}>共有数据：33条</div>
      </div>
    );
  }
}

export default withRouter(ButtonSize)