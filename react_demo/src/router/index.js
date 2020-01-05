import React, {Component, Fragment} from "react"
import {HashRouter, NavLink, Route, Redirect, Switch} from "react-router-dom"
import Admin from "../pages/Admin"
import Home from "../pages/Home"

class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path={"/admin"} render={() => {
            return (
              <Admin>
                <Switch>
                  <Redirect exact from={"/admin"} to={"/admin/home"}></Redirect>
                  <Route path={"/admin/home"} component={Home}></Route>
                </Switch>
              </Admin>
            )
          }}>

          </Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default AppRouter