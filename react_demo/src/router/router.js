import React, { Component, Fragment } from 'react'
import { HashRouter, NavLink, Switch, Redirect, Route, Link } from 'react-router-dom'


import login from '../pages/Login/login'
<<<<<<< HEAD
import aa from '../pages/Admin/header'
=======
import information from '../components/information/addInformation'


>>>>>>> c4c2cff210a56dbadd05455ca299dc2c3cfa80b0
class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <NavLink to='/login'></NavLink>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={login}></Route>
                  <Route  path='/information' component={information}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default AppRouter