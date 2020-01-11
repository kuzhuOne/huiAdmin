import React, { Component } from 'react'
import { HashRouter, NavLink, Switch, Redirect, Route} from 'react-router-dom'


import login from '../pages/Login/login'

import Admin from '../pages/admin/admin'
import Home from '../pages/admin/home'
//图片管理,资讯管理
import Information from '../pages/information/information'
import Photos from '../pages/photos/photos'
//产品管理
import Products from '../pages/products/products'
import Brand from '../pages/products/brand'
import Classification from '../pages/products/classification'
//评论管理
import CommentList from '../pages/comment/commentList'
import Idea from '../pages/comment/idea'
//会员管理
import MemberList from '../pages/member/memberList'
import MemberDel from '../pages/member/memberDel'
import Integral from '../pages/member/integral'
import Down from '../pages/member/down'
import Rank from '../pages/member/rank'
import Records from '../pages/member/records'
import Share from '../pages/member/share'
//管理员管理
import Admnistrators from '../pages/admistrator/admistrator'
import Limit from '../pages/admistrator/limit'
import Role from '../pages/admistrator/role'
//系统统计
import ThreeColumnChart from '../pages/system/3DColumnChart'
import ThreePancakeChart from '../pages/system/3DPancakeChart '
import AreaChart from '../pages/system/areaChart'
import ColumnChart from '../pages/system/columnChart'
import LineChart from '../pages/system/lineChart'
import TimeLineChart from '../pages/system/timeLineChart'
import PancakeChart from '../pages/system/PancakeChart'
// 系统管理
import Column from '../pages/systemManage/column'
import Data from '../pages/systemManage/data'
import Journal from '../pages/systemManage/journal'
import Setting from '../pages/systemManage/setting'
import Shield from '../pages/systemManage/shield'
//添加
import Add from '../components/information/addInformation11'




import download from '../pages/Download/download'


class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <NavLink to='/login'></NavLink>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={login}></Route>
                    <Route path="/admin" breadcrumbName="admin" render={()=>{
                        return(
                            <Admin>
                                <Switch>
                                    <Redirect exact from='/admin' breadcrumbName="admin" to='/admin/home'></Redirect>
                                    <Route path='/admin/home' breadcrumbName="Home" component={Home}></Route>
                                    <Route path='/admin/add' breadcrumbName="Home" component={Add}></Route>

                                    {/* 资讯管理 */}
                                    <Route path='/admin/information' component={Information}></Route>
                                    {/* 图片管理 */}
                                    <Route path='/admin/photos' component={Photos}></Route>
                                    {/* 产品管理 */}
                                    <Route exact path='/admin/products' component={Products}></Route>
                                    <Route path='/admin/products/brand' component={Brand}></Route>
                                    <Route path='/admin/products/classification' component={Classification}></Route>
                                    {/* 评论管理 */}
                                    <Route path='/admin/comment/commentList' component={CommentList}></Route>
                                    <Route path='/admin/comment/idea' component={Idea}></Route>
                                    {/* 会员管理 */}
                                    <Route path='/admin/member/memberList' component={MemberList}></Route>
                                    <Route path='/admin/member/memberDel' component={MemberDel}></Route>
                                    <Route path='/admin/member/rank' component={Rank}></Route>
                                    <Route path='/admin/member/integral' component={Integral}></Route>
                                    <Route path='/admin/member/records' component={Records}></Route>
                                    <Route path='/admin/member/down' component={download}></Route>
                                    <Route path='/admin/member/share' component={Share}></Route>
                                    {/* 管理员管理 */}
                                    <Route path='/admin/admnistrators/role' component={Admnistrators}></Route>
                                    <Route path='/admin/admnistrators/limit' component={Limit}></Route>
                                    <Route exact path='/admin/admnistrators' component={Role}></Route>
                                    {/* 系统统计 */}
                                    <Route path='/admin/system/lineChart' component={LineChart}></Route>
                                    <Route path='/admin/system/timelineChart' component={TimeLineChart}></Route>
                                    <Route path='/admin/system/areaChart' component={AreaChart}></Route>
                                    <Route path='/admin/system/columnChart' component={ColumnChart}></Route>
                                    <Route path='/admin/system/PancakeChart' component={PancakeChart}></Route>
                                    <Route path='/admin/system/3DColumnChart' component={ThreeColumnChart}></Route>
                                    <Route path='/admin/system/3DPancakeChart' component={ThreePancakeChart}></Route>
                                    {/* 系统管理 */}
                                    <Route path='/admin/systemManage/setting' component={Setting}></Route>
                                    <Route path='/admin/systemManage/column' component={Column}></Route>
                                    <Route path='/admin/systemManage/data' component={Data}></Route>
                                    <Route path='/admin/systemManage/shield' component={Shield}></Route>
                                    <Route path='/admin/systemManage/journal' component={Journal}></Route>
                                </Switch>
                            </Admin>
                        )
                    }}></Route>
                  <Route  path='/download' component={download}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default AppRouter