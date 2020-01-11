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
add=()=>{
  this.props.history.push("/admin/add")
}

  constructor() {
    super()
    this.state={
      infoCount:""
    }

  }
  componentDidMount(){

    this.setState({infoCount:this.props.info})
    console.log(this.state.infoCount,4444444444)
  }

  render() {
    const {size} = this.state;
    return (
      <div className={styles.main} style={{background: "#f5fafe"}}>
        <div className={styles.left}>
          <Button type="danger">批量删除</Button>

          <Button type="primary" icon="download" onClick={this.add}>
            添加资讯
          </Button>
        </div>

        <div className={styles.right}>共有数据：33{this.state.infoCount}条</div>
      </div>
    );
  }
}

export default withRouter(ButtonSize)