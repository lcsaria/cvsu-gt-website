import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../dashboard/Dashboard.js'
import Home from "../home/Home.js"
import Register from '../home/Register.js'
import UploadRecord from '../upload-record/UploadRecord.js'
import ProtectedRoute from './ProtectedRoute.js'

function RouteTree() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
                <ProtectedRoute exact path="/upload-record" component={UploadRecord}/>
            </Switch>
        </div>
    )
}

export default RouteTree
