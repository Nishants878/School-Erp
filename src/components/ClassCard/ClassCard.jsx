import React from 'react'
import classes from './ClassCard.module.css'
import { Link } from 'react-router-dom';


export default function ClassCard(props) {
    return (
        <div className={classes.Cards}>
           
                <Link className={classes.ProgramLinks} to={`/particularclass/${props.id}`}>
                    <div className={classes.CardContent}>
                        <div className={classes.CardThumbnail}>
                            <img src={props.thumbnail} alt="Course Background" />
                        </div>
                    </div>
                   
                </Link>

            

        </div>
    )
}
