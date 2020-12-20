import React from 'react'
import { useForm } from 'react-hook-form'
import classes from './Subjects.module.css'
import Topbar from '../../components/Topbar/Topbar'
import Profile from '../../Assests/image/profile.jpg'
import content from '../../static/index';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup'


// const schema = yup.object().shape({
//     maths: yup.number().required(),
//     science: yup.number().required(),
//     english: yup.number().required(),
//     hindi: yup.number().required(),
//     social: yup.number().required(),
// });

// import * as Yup from 'yup';

export default function Subjects() {
    

    const {register, handleSubmit} = useForm(
        // {
        //     resolver:yupResolver(schema),
        // }
    );

    const onSubmit =(data)=> console.log(data);
    // console.log(errors)
    
    

    return (
        <div className={classes.SubjectsMainContainer}>
          <Topbar/>
          <div className={classes.SubjectsContainer}>
               {/* student info card */}
                <div className={classes.StudentInfoCard}>
                    <div className={classes.ProfileImageWrapper}>
                    <img src={Profile} alt="Profile"/>
                    </div>
                    <div className={classes.ProfileContents}>
                       <div className={classes.TextWrapper}>
                           <h3>Name :-</h3> <h3>Karan Sharma</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Class :-</h3> <h3>4</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Father's Name :-</h3> <h3>Sharan Sharma</h3>
                       </div>
                       <div className={classes.TextWrapper}>
                           <h3>Mother's Name :-</h3> <h3>Sheena Sharma</h3>
                       </div>
                    </div>
                </div>
                {/* student info card */}
                {/* form */}
                <div className={classes.FormContainer}>
                    <h2 className={classes.SecondHeader}>
                        Enter Marks
                    </h2>
                <form  autoComplete="off" onSubmit={handleSubmit(onSubmit)}> 
                {content.inputs.map((input,key)=>{
                    return(
                        <div className={classes.LabelWrapper} key={key}>
                            <p>
                                <label className={classes.Label}>{input.label}</label>
                            </p>
                            <p>
                                <input 
                                className={classes.Input} 
                                name={input.name} 
                                type={input.type} 
                                ref={register}
                                />
                            </p>
                            {/* <p>{errors}</p> */}
                        </div>
                        
                    );
                })}
                   

                   <button className={classes.Btn} type="submit">Submit</button>
                    
                      </form>
                </div>
                {/* form */}
          </div>
        </div>
    )
}

