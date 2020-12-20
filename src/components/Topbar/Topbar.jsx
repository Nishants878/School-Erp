import React from 'react'
import classes from './Topbar.module.css';
import Profile from '../../Assests/image/profile.jpg'

export default function Topbar() {
    return (
        <div className={classes.TopbarMainContainer}>
            <div className={classes.FlexWrap}>
            <div className={classes.Header}>
                <h1>CLASSES</h1>
            </div>
            <div className={classes.RightWrapper}>
                <p>Help & Support</p>
               <div className={classes.ImageWrapper}>
               <img src={Profile} alt="Profile"/>
               </div>
               <p>Hi, Admin</p>
            </div>
            

           </div>
        </div>
    )
}
