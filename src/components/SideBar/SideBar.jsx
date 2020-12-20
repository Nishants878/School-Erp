import React from 'react'
import classes from './SideBar.module.css';
import logo from '../../Assests/image/logo.png'
import {Link} from 'react-router-dom';

export default function SideBar() {
    return (
        <div className={classes.NavBarMainContainer}>
        <div className={classes.NavBar}>
        <div className={classes.ProductDefinerWrapper}>
                <div className={classes.LogoWrapper}>
                    <img src={logo} alt="logo"/>
                </div>
                     <h1 className={classes.ProductDetailName}>School</h1>
              </div>
              <div className={classes.PageNavigationWrapper}>
                  <div className={classes.LinkBox}>
              <Link className={classes.IconAndLinkWrapper} to="/">
                <i className={["fas", "fa-home", classes.Icons].join(' ')}></i>  
                <p className={classes.PageLinkName}>Home</p>
                </Link>
                </div>
                  
                <Link className={classes.IconAndLinkWrapper} to="/accountspage">
                <i className={["fas", "fa-cog", classes.Icons].join(' ')}></i> 
                <p className={classes.PageLinkName}>Statistics</p>
                </Link>
                   
                {/* <Link className={classes.IconAndLinkWrapper} to="/accountspage">
                <i className={["fas", "fa-envelope-open-text", classes.Icons].join(' ')}></i> 
                <p className={classes.PageLinkName}>Policy</p>
                </Link>

                <Link className={classes.IconAndLinkWrapper} to="/accountspage">
                <i className={["fas", "fa-cog", classes.Icons].join(' ')}></i> 
                <p className={classes.PageLinkName}>Services</p>
                </Link> */}
              </div>
        </div>
    </div>
    )
}
