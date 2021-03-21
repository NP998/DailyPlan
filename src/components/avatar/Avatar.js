import React from 'react'
const defaultClasses = {
    avatarComponentClass: "",
    avatarClass:""
   };
const Avatar=({classes={...defaultClasses}})=>{
    const {avatarComponentClass,avatarClass}=classes;
    return(
        <div className={`avatar ${avatarClass}`} >
             
               <img  className={`${avatarComponentClass}`} src="https://www.daysoftheyear.com/wp-content/uploads/actors-day.jpg" alt="avatar image"/>
             
        </div>
    )
}

export default Avatar;