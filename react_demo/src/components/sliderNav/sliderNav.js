import React,{Component} from 'react'
import { Menu,Icon } from 'antd';
import {Link} from 'react-router-dom';
import menuData from './rootAlllist'
const { SubMenu } = Menu;


class SliderNav extends Component{
    renderData(data){
        if(!data.length) return '暂无数据'
        let result=data.map((item)=>{
           if(item.children){
                return(
                    <SubMenu title={
                        <span>
                            <Icon type={item.icon}></Icon>
                            <span>{item.name}</span>
                        </span>
                    }>
                        {this.renderData(item.children)}
                    </SubMenu>
                )
           }else{
               return(
                   <Menu.Item >
                       <Link to={item.path || '/admin'}>
                        <span>
                                <Icon type={item.icon}></Icon>
                                <span> {item.name}</span>
                        </span>
                       </Link>
                   </Menu.Item>
               )
           }
        })
        return result
    }
    render(){
        return(
            <Menu
            mode="inline"
            style={{ width: 201 }}
          >
              {this.renderData(menuData)}
          </Menu>
        )
    }
}
export default SliderNav