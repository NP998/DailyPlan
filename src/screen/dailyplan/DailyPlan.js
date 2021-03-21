import React from 'react';
import DailyProcess from '../../components/dailyprocess/DailyProcess';
import Navbar from '../../components/navbar/Navbar';
const DailyPlan=()=>{
    return(
        <div className="dailyplan">
             <Navbar/>
            <DailyProcess/> 
        </div>

    )}


export default DailyPlan;