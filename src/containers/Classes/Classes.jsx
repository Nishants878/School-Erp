import React, { Fragment, useState } from 'react'
import classes from './Classes.module.css';
import Topbar from '../../components/Topbar/Topbar'
import ClassCard from '../../components/ClassCard/ClassCard'

export default function Classes() {
    
    const [Class, setClass] = useState([]);

    return (
        <div className={classes.ClassesMainContainer}>
            <Topbar/>
            <Fragment>
                <div className={classes.ClassCardContainer}>
                <ClassCard/><ClassCard/><ClassCard/><ClassCard/><ClassCard/><ClassCard/>
                </div>
            </Fragment>
            
        </div>
    )
}
