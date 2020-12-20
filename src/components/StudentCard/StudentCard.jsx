import React, { useState } from 'react'
import classes from './StudentCard.module.css'
import { Link } from 'react-router-dom';
import RotatingDropIcon from '../../Assests/image/chevron.svg';


function StudentCard() {
    
  
      const[isOpen, setIsOpen] = useState(false);
      
   
  
    return (
      
      <div className={classes.AccordionCard}>
          <div
          onClick ={() => setIsOpen(!isOpen)}
          className={classes.AccordionHeader}>
           Student Name
          <img className={[isOpen ? classes.DropIcon:classes.DropRotate]} src={RotatingDropIcon} alt="DropDownIcon"/>
          </div>
          {<div className={isOpen ? classes.AccordionOpenBody : classes.AccordionBody}>
          <Link  to="/subjects"  className={classes.SessionIndicator}>
           Enter Marks
              </Link>
          <Link to="/report" className={classes.SessionIndicator}>
            Report Card
              </Link>
        </div>
        }
         
      </div>
    );
  }
  
  export default StudentCard;