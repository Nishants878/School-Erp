import React, { Fragment, useState, useEffect } from 'react'
import classes from './Classes.module.css';
import Axios from 'axios';
import Topbar from '../../components/Topbar/Topbar'
import ClassCard from '../../components/ClassCard/ClassCard'

export default function Classes() {
    
    const [classCard, setClassCard] = useState([]);


    // api integration
    useEffect(()=>{

        //here we cant do async await in one function as it is not recommended by react so making another func for await
        async function makeGetRequest(){
            const request = await Axios.get("https://5fe1862804f0780017de9d2e.mockapi.io/school");
            setClassCard(request.data);
            return request
        }
            makeGetRequest()
    },[]);

    return (
        <div className={classes.ClassesMainContainer}>
            <Topbar/>
            <Fragment>
                <div className={classes.ClassCardContainer}>
                    {classCard.map(items =>{
                        return <ClassCard id={items.id} key={items.id} thumbnail={items.thumbnail} />
                    })}
               
                </div>
            </Fragment>
            
        </div>
    )
}
