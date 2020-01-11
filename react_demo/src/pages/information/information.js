import React,{Component} from 'react'
import Add from "../../components/add"
import Search from "../../components/search"
import List from "../../components/informationList"

class Information extends Component{
 constructor(){
    super() //执行父类的构造函数
    this.state={
      infoCount:""
    }
  }
  setInfoCount(params){
  this.setState({infoCount:params})
  }
    render(){
        return (
            <div>
                资讯页面
               <Search></Search>
               <Add info={this.state.infoCount}></Add>
               <List info={this.setInfoCount.bind(this)}></List>
               
            </div>
        )
    }
}
export default Information