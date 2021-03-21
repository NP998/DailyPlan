import React from 'react';
import Challen from '../challen/Challen';
import Dailytips from "../dailytips/Dailytips";
const Challenge=()=>{
    return(
        <div className="challenge">
           <div className="challen">
              <Challen/>
           </div>
           <div className="dailytips">
              <Dailytips/>
           </div>
        </div>

    )}


export default Challenge;