import React,{Component} from "react"
import Information from '../information/addInformation11'
import { Modal, Button } from 'antd';

class App extends React.Component {
  state = {
    modal1Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>
          Display a modal dialog at 20px to Top
        </Button>
        <Modal
          title="20px to Top"
          style={{ top: 50,background:'red', }}
          width={1000}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <Information></Information>
        </Modal>

      </div>
    );
  }
}


export default App