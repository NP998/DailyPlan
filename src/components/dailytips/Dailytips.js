import React from 'react';
import {BiChevronRight} from 'react-icons/bi';

const data=[
    {
        title:"Mindfullness",
        desc:"do once hour yoga for improving your body balance and flexiblity",
        icon:<BiChevronRight/>,
        say:"Find out more"
    },
    {
        title:"Get more of your day",
        desc:"do once hour yoga for improving your body ",
        icon:<BiChevronRight/>,
        say:"Find out more"
    },
    {
        title:"Early bedtime",
        desc:"Go to sleep more at the same hour every night ",
        icon:<BiChevronRight/>,
        say:"Find out more",
        class:"nothing"
    }
]
const Dailytips=()=>{
    return(
        <>
        <div className="see-all">
          <h4>Daily Tips</h4>
          <div>See All <BiChevronRight/></div>
        </div>
        <div className="dailytip">
           <div className="tips">
               {
                   data.map((element,index)=>(
                       <div className={`mesgg ${element.class}`}>
                       <p className="paheratitle"> {element.title}</p>
                       <p className="paheragraph"> {element.desc}</p>
                       <div className="find-more">
                           <div>{element.icon}</div>
                           <span className="says">{element.say}</span>
                       </div>    
                       </div>
                       

                   ))}
           </div>
        </div>
        </>
    )}


export default Dailytips;