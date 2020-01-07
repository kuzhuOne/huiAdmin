import React,{Component} from 'react'
import Add from "../../components/add"
import Search from "../../components/search"

class Information extends Component{
    render(){
        return (
            <div>
                资讯页面
               <Search></Search>
               <Add></Add>
            </div>
        )
    }
}
export default Information