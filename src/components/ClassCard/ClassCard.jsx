import React from 'react'
import classes from './ClassCard.module.css'
import { Link } from 'react-router-dom';
import Logo from '../../Assests/image/9.png'

export default function ClassCard() {
    return (
        <div className={classes.Cards}>
           
                <Link className={classes.ProgramLinks} to="/particularclass">
                    <div className={classes.CardContent}>
                        <div className={classes.CardThumbnail}>
                            <img src={Logo} alt="Course Background" />
                        </div>
                    </div>
                   
                </Link>

            

        </div>
    )
}
