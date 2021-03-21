import React from 'react';
import DailyMonitering from '../dailymonitering/DailyMonitering';
import Challenge from '../challenge/Challenge';
import RecomendedChall from '../recomendedChall/RecomendedChall';
const DailyProcess=()=>{
    return(
        <div className="daily-process">
           <DailyMonitering/>
           <Challenge/>
           <RecomendedChall/>
        </div>

    )}


export default DailyProcess;