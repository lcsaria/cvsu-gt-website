import React from 'react'
import { Route, Switch } from 'react-router'
import Home from "../home/Home.js"


function RouteTree() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Home}/>
            </Switch>
        </div>
    )
}

export default RouteTree
