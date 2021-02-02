import React from 'react'

import classes from './Report.module.css'
import Topbar from '../../components/Topbar/Topbar'
import Profile from '../../Assests/image/profile.jpg'
import { Link } from 'react-router-dom';

import ReportCard from '../../components/ReportCard/ReportCard'


export default function Report(props) {
    console.log(props.location.name)

    
    
    

    return (
        <div  className={classes.SubjectsMainContainer}>
          <Topbar/>
          <div className={classes.ReportContainer}>
           <ReportCard id={props.location.id} key={props.location.id} name={props.location.name} father={props.location.father} 
           mother={props.location.mother} 
           maths={props.location.maths} 
           english={props.location.english}
           hindi={props.location.hindi} 
           science={props.location.science} 
           social={props.location.social}
           class={props.location.class}
           />
                
          </div>
        </div>
    )
}

