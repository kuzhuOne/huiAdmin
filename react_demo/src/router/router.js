import React, { Component, Fragment } from 'react'
import { HashRouter, NavLink, Switch, Redirect, Route, Link } from 'react-router-dom'


import login from '../pages/Login/login'
import aa from '../pages/Admin/header'
class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <NavLink to='/login'></NavLink>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={login}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default AppRouter