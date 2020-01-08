import React,{Component} from 'react'
import Add from "../../components/add"
import Search from "../../components/search"
import List from "../../components/informationList"
class Information extends Component{
    render(){
        return (
            <div>
                资讯页面
               <Search></Search>
               <Add></Add>
               <List></List>
            </div>
        )
    }
}
export default Information