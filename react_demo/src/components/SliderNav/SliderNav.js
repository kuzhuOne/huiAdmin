import React ,{Component} from "react"
import {Menu,Icon} from "antd"
import {Link} from "react-router-dom"
import {filterRootList} from "./filterRoutList"
const {SubMenu} =Menu
class SliderNav extends Component{
  constructor(){
    super()
    this.state={
      menuData:[]
    }
  }
  componentDidMount(){
    let res={err:0,msg:'ok',token:111,rootIds:['1','1-0']}
    let result=filterRootList(res.rootIds)
    this.setState({menuData:result})
  }
  renderItem(data){
    if(!data.length) return "站务数据"
    let result=data.map((item,)=>{
      if(item.children){
        return(
          <SubMenu key={item.id}
                   title={
                     <span>
                       <Icon type={item.icon}></Icon>
                       <span>{item.name}</span>
                     </span>
                   }
          >
            {this.renderItem(item.children)}

          </SubMenu>
        )
      }else{
        return(
          <Menu.Item key={item.id}>
            <Link to={item.path}>
              <span>
                <Icon type={item.icon}></Icon>
                <span>{item.name}</span>
              </span>
            </Link>
          </Menu.Item>
        )
      }
    })
  }
  render(){
    let {menuData}=this.state
    return(
      <Menu>
        {this.renderItem(menuData)}
      </Menu>
    )
  }
}
export default SliderNav