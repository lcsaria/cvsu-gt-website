import React from 'react'
import { Route, Switch } from 'react-router'
import ContactInformation from '../about/ContactInformation.js'
import UniversitySealAndHymn from '../about/UniversitySealAndHymn.js'
import VisionMissionGoals from '../about/VisionMissionGoals.js'
import Home from "../home/Home.js"


function RouteTree() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Home}/>
                <Route exact path="/vision-mission-goals" component={VisionMissionGoals}/>
                <Route exact path="/contact-information" component={ContactInformation}/>
                <Route exact path="/university-seal" component={UniversitySealAndHymn}/>
            </Switch>
        </div>
    )
}

export default RouteTree
