import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import {VscHome} from 'react-icons/vsc';
import {RiCalendarCheckLine} from 'react-icons/ri';
import {BsGraphUp} from 'react-icons/bs';
import {GiSquareBottle} from 'react-icons/gi';
import {BiFootball} from 'react-icons/bi';
import {TiBrush} from 'react-icons/ti';
import {RiHeartPulseLine} from 'react-icons/ri';
import {GiOctoman} from 'react-icons/gi';
import {BsDroplet} from 'react-icons/bs';
import {CgEye} from 'react-icons/cg';
import {FiTriangle} from 'react-icons/fi';
import {CgNotes} from 'react-icons/cg';
import Avatar from '../avatar/Avatar';
import topimage from '../../image/top-image.jpg';

const navItems=[
        {
        heading:"DASHBOARD"
        },
    {
    name:"Overview",
    icon:<VscHome/>,
    link:"overview"
    },
    {
    name:"Daily Plan",
    icon:<RiCalendarCheckLine/>,
    link:"dailyplan"
    },
    {
    name:"Progress",
    icon:<BsGraphUp/>,
    link:"progress"
    },
       {
        heading:"PERSONAL TIPS"
        },
    {
    name:"Nutrition",
    icon:<GiSquareBottle/>,
    link:"nutrition"
    },  
    {
    name:"Sport",
    icon:<BiFootball/>,
    link:"sport"
    },
    {
    name:"Beauty",
    icon:<TiBrush/>,
    link:"beauty"
    },
    {
    name:"Health",
    icon:<RiHeartPulseLine/>,
    link:"health"
    },
    {
    name:"Mindfullness",
    icon:<GiOctoman/>,
    link:"mindfullness"
    },
        {
            heading:"YOUR DATA"
            },
        {
        name:"Blood",
        icon:<BsDroplet/>,
        link:"blood"
        },
        {
        name:"DNA",
        icon:<CgEye/>,
        link:"dna"
        },
        {
        name:"Microbiome",
        icon:<FiTriangle/>,
        link:"microbiome"
        },
        {
        name:"Questionnaire",
        icon:<CgNotes/>,
        link:"questionnire"
        }
    
]

const Dashboard=({children})=>{
    const location=useLocation()
    return(
        <div className="container">
         <div className="dashboard-container">
           <div className="left-container">
               <div className="top-item"><img src={topimage}/> </div>  
               <Avatar/>
               <div className="points">
                   <span style={{color:'gray',fontSize:"10px",paddingBottom:'0px'}}>Daily Points</span>
                   <span style={{fontSize:'25px',fontWeight:'bold',}}>2,466</span>
               </div>
               <div className="nav-item-container">
                    {navItems.map((navItem,index)=>(
                        <Link to={navItem.link}>
                           <div key={index} className={`nav-item ${navItem.link===location.pathname?'selected':""}`}>
                               {<label className="heading" >{navItem.heading}</label>}
                               { navItem.icon}
                               <label className="item-name">{navItem.name}</label>
                           </div>
                        </Link>
                    ))}
               </div>
           </div>


           <div className="right-container">
              {children}
           </div>
           </div>
        </div>

    )}


export default Dashboard;