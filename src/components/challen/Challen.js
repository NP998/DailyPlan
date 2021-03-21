import React from 'react';
import {FaAppleAlt} from 'react-icons/fa';
import girl from "../../image/girl.PNG";
const Challen=()=>{
    return(
        <>
        <p >Challenge</p>
        <div className="morning-thing">
             
             <div className="morning-tips">

                <div className="apple" >
                  < FaAppleAlt/>
                  <h4>Early Morning Smoothie</h4>
               </div>

               <p>Start your day with energy . For breackfast prepare a power and healty smoothie rich in posttasiam
                   and vitamin C .It your boost metabollism .
               </p>

               <p className="spans">RECIPE:</p>
               <div className="recipe">
                   <div className="item">
                          <pre>
                               . 130g banana<br></br>
                               . 1 whole kiwi<br></br>
                               . 250 mL orange juice<br></br>
                               . 3 spoons of yogurt
                          </pre>
                    </div>
                   <div className="cal"> 420 cal</div>
                </div>

               <div className="btn">
                 <button>ADD CHALLENGE</button>
                 <p>CHALLENGE FRIEND</p>
               </div>
             </div>
             <div className="morning-image">
                <img src={girl} alt="girl" image/>

             </div>
        </div>
        </>
    )}


export default Challen;