import React,{Component} from "react"
import { Menu, Dropdown, Button, Icon, message, Radio,DatePicker ,Input } from 'antd';

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      全部范围
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);




class ButtonSize extends React.Component {
  state = {
    size: 'large',
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };


//日期
  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  render() {
    const { size,startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <Button type="primary" icon="download" >
          关闭选项卡
        </Button>

        <Dropdown overlay={menu}>
          <Button>
            全部范围 <Icon type="down" />
          </Button>
        </Dropdown>
        <span>日期范围：</span>

        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}

        />
        <span>-</span>
        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
          style={{ width: 30 }}

        />

          <Input placeholder="资讯名称" style={{ width: 200 }} />

        <Button  icon="search" style={{backgroundColor:"green",color:"white"}}>
          搜资讯
        </Button>
      </div>
    );
  }
}

export default ButtonSize