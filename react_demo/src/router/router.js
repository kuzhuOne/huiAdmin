import React, { Component, Fragment } from 'react'
import { HashRouter, NavLink, Switch, Redirect, Route, Link } from 'react-router-dom'


import login from '../pages/Login/login'
import information from '../components/information/addInformation11'
import add from '../components/add'


class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <NavLink to='/login'></NavLink>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={login}></Route>
                  <Route  path='/information' component={information}></Route>
                  <Route  path='/add' component={add}></Route>

                </Switch>
            </HashRouter>
        )
    }
}
export default AppRouter