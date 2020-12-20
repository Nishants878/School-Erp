import React  from 'react'
// import { useForm } from 'react-hook-form'
import classes from './ParticularClass.module.css'
import Topbar from '../../components/Topbar/Topbar'
import StudentCard from '../../components/StudentCard/StudentCard'
// import content from '../../static/index';



export default function ParticularClass() {

   
  
//   const {register, handleSubmit} = useForm(
//     // {
//     //     resolver:yupResolver(schema),
//     // }
// );

// const onSubmit =(data)=> console.log(data);

  // const [showUploadTab, setShowUploadTab] = useState(false)
    return (
        <div className={classes.ParticularClassMainContainer}>
            <Topbar/>
            
            <div className={classes.StudentContainer}>
                <div className={classes.FlexWrap}> <h2 className={classes.SecondHeader}>Students:-</h2>
               
                <button className={classes.Btn}>Create</button></div>
                {/* modal */}
            {/* <div className={classes.HiddenAlways}>
              <form className={classes.StudentTab} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <i  className={["fas", "fa-times", classes.CrossIcons].join(' ')}></i> 
              <div className={classes.FlexWrapHidden}>
                <div className={classes.ImageWrapper}>
              <label htmlFor="myfile">Select a file:</label>
                      <input type="file" accept="image/*"></input>
                      </div>
                      <div className={classes.ContentWrapperHidden}>
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
                            
                        </div>
                        
                    );
                })}
                </div>
                      </div>
              </form>
            </div> */}
             {/* modal */}
               
              <div className={classes.StudentCardContainer}>
                <StudentCard/>
                <StudentCard/>
                <StudentCard/>
                <StudentCard/>
                <StudentCard/>
              </div>
            </div>
        </div>
    )
}
