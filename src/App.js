
import classes from './app.module.css'

import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar'
import Classes from './containers/Classes/Classes'
import ParticularClass from './containers/ParticularClass/ParticularClass'
import Subjects from './containers/Subjects/Subjects'
import Report from './containers/Report/Report'
export default function App() {
  return (
    <BrowserRouter>
         <div className={classes.App}>
      <div className={classes.NavContent}>
      <SideBar/> 
      </div>
      <div className={classes.AppMainContainer}>
        <Switch>
        <Route exact path = "/" component={Classes} />
        <Route  path = "/particularclass" component={ParticularClass} />
        <Route  path = "/subjects" component={Subjects} />
        <Route  path = "/report" component={Report} />
        </Switch>
        
      </div>
       
    </div>
    </BrowserRouter>
  
  )
}

