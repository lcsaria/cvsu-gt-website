import React from 'react'
import { Route, Switch } from 'react-router'
import Home from "../home/Home.js"
import ManageUser from '../manage-user/Manageuser.js'
import ProtectedRoute from './ProtectedRoute.js'

function RouteTree() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Home}/>
                <ProtectedRoute exact path="/manage-user" component={ManageUser}/>
            </Switch>
        </div>
    )
}

export default RouteTree
