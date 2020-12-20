import React from 'react'

import classes from './Report.module.css'
import Topbar from '../../components/Topbar/Topbar'
import Profile from '../../Assests/image/profile.jpg'





export default function Report() {
    

    
    
    

    return (
        <div className={classes.SubjectsMainContainer}>
          <Topbar/>
          <div className={classes.ReportContainer}>
               {/* student info card */}
               <h2>Student Report</h2>
                <div className={classes.StudentInfoCard}>
                    <div className={classes.ProfileImageWrapper}>
                    <img src={Profile} alt="Profile"/>
                    </div>
                    <div className={classes.ProfileContents}>
                       <div className={classes.TextWrapper}>
                           <h3>Name :-</h3> <h3>Karan Sharma</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Class :-</h3> <h3>9</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Father's Name :-</h3> <h3>Sharan Sharma</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Mother's Name :-</h3> <h3>Sheena Sharma</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Subject Wise Result</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Maths :-</h3> <h3>80</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>English :-</h3> <h3>90</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Hindi :-</h3> <h3>75</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Science :-</h3> <h3>90</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Social Studies :-</h3> <h3>75</h3>
                       </div>
                    </div>
                </div>
                {/* student info card */}
                
          </div>
        </div>
    )
}

