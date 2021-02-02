import React from 'react'
import classes from './ReportCard.module.css'
import { Link } from 'react-router-dom';

import Profile from '../../Assests/image/profile.jpg'
export default function ReportCard(props) {
    console.log(props)
    return (
        <div  className={classes.MainContainer}>
           {/* student info card */}
           <h2>Student Report</h2>
           <div className={classes.StudentInfoCard}>
               <div className={classes.ProfileImageWrapper}>
               <img src={Profile} alt="Profile"/>
               </div>
               <div className={classes.ProfileContents}>
                  <div className={classes.TextWrapper}>
                      <h3>Name :-</h3> <h3>{props.name}</h3>
                  </div>
                  <div className={classes.TextWrapper}>
                      <h3>Class :-</h3> <h3>{props.class}</h3>
                  </div>
                  <div className={classes.TextWrapper}>
                      <h3>Father's Name :-</h3> <h3>{props.father}</h3>
                  </div>
                  <div className={classes.TextWrapper}>
                      <h3>Mother's Name :-</h3> <h3>{props.mother}</h3>
                  </div>
                  <div className={classes.TextWrapper}>
                      <h3>Subject Wise Result</h3>
                  </div>
                  <div className={classes.TextWrapper}>
                      <h3>Maths :-</h3> <h3>{props.maths}</h3>
                  </div>
                  <div className={classes.TextWrapper}>
                      <h3>English :-</h3> <h3>{props.english}</h3>
                  </div>
                  <div className={classes.TextWrapper}>
                      <h3>Hindi :-</h3> <h3>{props.hindi}</h3>
                  </div>
                  <div className={classes.TextWrapper}>
                      <h3>Science :-</h3> <h3>{props.science}</h3>
                  </div>
                  <div className={classes.TextWrapper}>
                      <h3>Social Studies :-</h3> <h3>{props.social}</h3>
                  </div>
               </div>
           </div>
           </div>
           
    )
}
