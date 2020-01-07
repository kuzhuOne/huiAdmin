import React,{Component,Fragment} from "react"
import {Form,Input, Tooltip,Icon,Cascader,Select,Row,Col,Checkbox,Button,AutoComplete,DatePicker,Upload,Modal} from "antd"
const { Option } = Select;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class addInformation extends Component{
  state = {
    myContent:"文章",
    confirmDirty: false,
    autoCompleteResult: [],
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-5',
        name: 'image.png',
        status: 'error',
      },
    ],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {

      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>,
      );

      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));

    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
      return(

      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label={this.state.myContent+'标题'} {...formItemLayout}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="简略标题" {...formItemLayout}>
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item label="分类栏目">
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              {type: 'array', required: true, message: 'Please select your habitual residence!'},
            ],
          })(<Cascader options={residences}/>)}
        </Form.Item>

        <Form.Item label={this.state.myContent+"类型"} hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>,
          )}
        </Form.Item>

          <Form.Item label="排序值" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="关键字" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>

        <Form.Item label={this.state.myContent+"摘要"} {...formItemLayout}>
          <TextArea placeholder="textarea with clear icon" allowClear  />
        </Form.Item>
        <Form.Item label={this.state.myContent+"作者"} {...formItemLayout}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label={this.state.myContent+"来源"} {...formItemLayout}>
          <Input  placeholder="input placeholder" />
        </Form.Item>


        <Form.Item label="允许评论" >
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox></Checkbox>)}


        </Form.Item>


        <Form.Item label="评论开始日期">
          {getFieldDecorator('date-time-picker', config)(
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
          )}
        </Form.Item>
        <Form.Item label="评论结束日期">
          <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
        </Form.Item>

        <Form.Item label="Field B" {...formItemLayout}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="图片上传" extra="longgggggggggggggggggggggggggggggggggg">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <div className="clearfix">
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          )}

        </Form.Item>


        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" >
            Primary
          </Button>
          <Button >Normal</Button>
          <Button type="dashed" >
            Dashed
          </Button>
          <Button type="primary" icon="download" >
            DownloadDownload
          </Button>
        </Form.Item>


      </Form>

      )
    }

}
export default Form.create()(addInformation) ;

