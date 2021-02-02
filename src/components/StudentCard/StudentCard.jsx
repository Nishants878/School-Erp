import React, { useState } from 'react'
import classes from './StudentCard.module.css'
import { Link } from 'react-router-dom';
import RotatingDropIcon from '../../Assests/image/chevron.svg';
import EnterMarksCard from '../EnterMarksCard/EnterMarksCard'
import ReportCard from '../ReportCard/ReportCard'
import Report from '../../containers/Report/Report'

function StudentCard(props) {
  console.log(props)
    
  
      const[isOpen, setIsOpen] = useState(false);
      
   
  
    return (
      
      <div  className={classes.AccordionCard}>
          <div
          onClick ={() => setIsOpen(!isOpen)}
          className={classes.AccordionHeader}>
           {props.name}
          <img className={[isOpen ? classes.DropIcon:classes.DropRotate]} src={RotatingDropIcon} alt="DropDownIcon"/>
          </div>
          {<div className={isOpen ? classes.AccordionOpenBody : classes.AccordionBody}>
          <div    className={classes.SessionIndicator}>
           <EnterMarksCard/>
              </div>
          <div  className={classes.SessionIndicator}>
          <Link className={classes.ReportLink}  to={{
    pathname: `/report/${props.id}`,
    id:props.id,
    key:props.id,
    name: props.name,
    father:props.father,
    mother:props.mother,
    maths:props.maths,
    english:props.english,
    hindi:props.hindi,
    science:props.science,
    social:props.social,
    class:props.class
  }}>Report</Link>
              </div>    
        </div>
        }
         
      </div>
    );
  }
  
  export default StudentCard;
