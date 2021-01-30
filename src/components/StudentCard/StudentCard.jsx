import React, { useState } from 'react'
import classes from './StudentCard.module.css'
import { Link } from 'react-router-dom';
import RotatingDropIcon from '../../Assests/image/chevron.svg';
import EnterMarksCard from '../EnterMarksCard/EnterMarksCard'

function StudentCard(props) {
  console.log(props)
    
  
      const[isOpen, setIsOpen] = useState(false);
      
   
  
    return (
      
      <div className={classes.AccordionCard}>
          <div
          onClick ={() => setIsOpen(!isOpen)}
          className={classes.AccordionHeader}>
           {props.name}
          <img className={[isOpen ? classes.DropIcon:classes.DropRotate]} src={RotatingDropIcon} alt="DropDownIcon"/>
          </div>
          {<div className={isOpen ? classes.AccordionOpenBody : classes.AccordionBody}>
          <div  to="/subjects"  className={classes.SessionIndicator}>
           <EnterMarksCard/>
              </div>
          <Link to={`/report/${props.id}`}  className={classes.SessionIndicator}>
            Report Card
              </Link>    
        </div>
        }
         
      </div>
    );
  }
  
  export default StudentCard;
