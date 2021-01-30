import React from 'react'
import classes from './EnterMarksCard.module.css'
import { Link } from 'react-router-dom';
export default function EnterMarksCard() {
    return (
        <Link to="/subjects" className={classes.MainContainer}>
            Enter marks
        </Link>
    )
}
