import React from 'react';
import {BiChevronRight} from 'react-icons/bi';
import {FaAppleAlt} from 'react-icons/fa';
import {RiFootprintLine} from 'react-icons/ri';
import {BiDumbbell} from 'react-icons/bi';
import {FiMoon} from 'react-icons/fi';

const moniterCard=[
    {
      icon:<FaAppleAlt/>,
      activity:"Calories",
      duration:"2814",
      status:"DAILY AVERAGE",
      color:"#afd0af"
    },
    {
        icon:<RiFootprintLine/>,
        activity:"Steps",
        duration:"7234",
        status:"DAILY AVERAGE",
        color:"#e4ced2"
    },
      {
        icon:<BiDumbbell/>,
        activity:"Workouts",
        duration:"1h 23min",
        status:"ACTIVE",
        color:"s#b6d7e4"
      },  
      {
        icon:<FiMoon/>,
        activity:"Sleeping ",
        duration:"7h 35min",
        status:"IN BAD AVAERAGE",
        color:"#fbdba0"
      }

]
    
const DailyMonitering=()=>{
    return(
        <div className="daily-monitering">
           <div className="header">
               <p>Daily Monitering</p>
               <div className="see-progress">
                   <p >See progress</p>
                   <BiChevronRight/>
               </div>
           </div>
           <div className="daily-monitering-card">
            { moniterCard.map((element,index)=>(
              
                <div className="col-md-4 col-10 mx-auto parent">
                  <div className="card ">
                      <div className="icon-border" style={{background:element.color}}>
                        <div className="card-icon" >{element.icon }</div>
                      </div>
                      <div className="card-body">
                        <span style={{fontWeight:"bold",fontSize:"13px"}} className="card-title font-weight-bold">{element.activity}</span><br></br>
                        <span className="card-text">{element.duration}</span><br></br>
                        <span style={{fontSize:"11px"}} className="card-texts">{element.status} </span>
                     </div>
                  </div>
                </div>
            ))} 
          </div>
        </div>

    )}


export default DailyMonitering;