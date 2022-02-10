import React from 'react'
import { Route, Switch } from 'react-router'
import CampusHistory from '../about/CampusHistory.js'
import ContactInformation from '../about/ContactInformation.js'
import UniversitySealAndHymn from '../about/UniversitySealAndHymn.js'
import VisionMissionGoals from '../about/VisionMissionGoals.js'
import Home from "../home/Home.js"


function RouteTree() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>         
                <Route exact path="/contact-information" component={ContactInformation}/>
                <Route exact path="/history" component={CampusHistory}/>
                <Route exact path="/university-seal" component={UniversitySealAndHymn}/>
                <Route exact path="/vision-mission-goals" component={VisionMissionGoals}/>
            </Switch>
        </div>
    )
}

export default RouteTree
