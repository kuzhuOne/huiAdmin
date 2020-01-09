import React,{Component,Fragment} from "react"
import {Form,Input, Tooltip,Icon,Cascader,Select,Row,Col,Checkbox,Button,AutoComplete,DatePicker,Upload,Modal} from "antd"
import {AddInformation} from "../../api/information"
const { Option } = Select;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'all',
    label: '全部栏目',

  },
  {
    value: 'jiangsu',
    label: '新闻资讯',
    children: [
      {
        value: 'nanjing',
        label: '行业动态',

      },{
        value: 'nanjffing',
        label: '行业资讯',

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

    ],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let {author,key,num,remember,resiaaadence,simpleTitle,source,title,type,upload}=values
        let aa=type[0]
        AddInformation({title,aa})
          .then((res)=>{
            console.log(res)
            if(res.err==0){
              alert("添加成功")
              this.props.history.replace('/admin/information')
            }
          })
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
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input the captcha you got!' }],
          })(<Input />)}

        </Form.Item>
        <Form.Item label="简略标题" {...formItemLayout}>
          {getFieldDecorator('simpleTitle', {
            rules: [{  message: 'Please input the captcha you got!' }],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="分类栏目">
          {getFieldDecorator('resiaaadence', {
            initialValue : ['all'],
            rules: [
              {type: 'array', required: true, },
            ],
          })(<Cascader  options={residences}/>)}
        </Form.Item>

        <Form.Item label={this.state.myContent+"类型"} hasFeedback>
          {getFieldDecorator('type', {
            initialValue : ['全部类型'],
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <Select placeholder="Please select a country">
              <Option value="allType">全部类型</Option>
              <Option value="help">帮助说明</Option>
              <Option value="newInformation">新闻资讯</Option>
            </Select>,
          )}
        </Form.Item>

          <Form.Item label="排序值" {...formItemLayout}>
            {getFieldDecorator('num', {
              rules: [{  }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="关键字" {...formItemLayout}>
            {getFieldDecorator('key', {
              rules: [{  }],
            })(<Input />)}
          </Form.Item>

        <Form.Item label={this.state.myContent+"摘要"} {...formItemLayout}>
          <TextArea placeholder="textarea with clear icon" allowClear  />
        </Form.Item>
        <Form.Item label={this.state.myContent+"作者"} {...formItemLayout}>
          {getFieldDecorator('author', {
            rules: [{  }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={this.state.myContent+"来源"} {...formItemLayout}>
          {getFieldDecorator('source', {
            rules: [{  }],
          })(<Input />)}
        </Form.Item>


        <Form.Item label="允许评论" >
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox></Checkbox>)}


        </Form.Item>


        <Form.Item label="评论开始日期">
          <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
        </Form.Item>
        <Form.Item label="评论结束日期">
          <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
        </Form.Item>

        <Form.Item label="Field B" {...formItemLayout}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="图片上传" >
          {getFieldDecorator('upload', {
            valuePropName: 'filelist',
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
          <Button type="primary" htmlType="submit" className="login-form-button" icon="file" >
            保存并提交审核
          </Button>

          <Button type="dashed" >
            Dashed
          </Button>
          <Button type="dashed"  >
            取消
          </Button>
        </Form.Item>


      </Form>

      )
    }

}
export default Form.create()(addInformation) ;

