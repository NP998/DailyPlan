import React from 'react';
import Avatar from '../avatar/Avatar';
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io';
import {RiArrowDropDownLine} from 'react-icons/ri';
const DailyPlan=()=>{
    return(
        <div className="navbar">
            <div className="search-bar">
                <AiOutlineSearch className="search-icon"/>
                <input type="text"   placeholder="Type in to Search"/>
              
            </div>
            <div className="avatar-notifi">
                <IoMdNotificationsOutline/>
                <Avatar classes={{avatarComponentClass:"hover-action",avatarClass:"avatar-size"}}/>
                <h3 className="namenav">Navin Patel</h3>
                <RiArrowDropDownLine/>
            </div>
            
        </div>

    )}


export default DailyPlan;