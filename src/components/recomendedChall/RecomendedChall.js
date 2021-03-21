import React from 'react';
import {BiChevronRight,BiChevronLeft} from 'react-icons/bi';
import C from "../../image/c.jpg";
import Cplus from "../../image/c++.jpg";
import first from "../../image/1a.jpg";
import second from "../../image/2.jpg";
import third from "../../image/3.jpg";
import fourth from "../../image/4.jpg";
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {BiDumbbell} from 'react-icons/bi'

const cerosalContainer=[
    {
        backgroundColor: "linear-gradient(57deg,#ed97e9 0%, #9e19a1 80%)",
        image:first,
        icon:<BiDumbbell/>,
        topicon:<AiOutlinePlusCircle/>,
        text1:"High Intencity Training",
        text2:"running in the nature",

    }
    ,{
        background: "background: linear-gradient(57deg,#97eda5 0%, #2ccbe0 80%)",
        image:second,
        icon:<BiDumbbell/>,
        topicon:<AiOutlinePlusCircle/>,
        text1:"High Intencity Training",
        text2:"running in the nature"

    },
    {
        background: "linear-gradient(57deg,#ed97e9 0%, #9e19a1 80%)",
        image:third,
        icon:<BiDumbbell/>,
        topicon:<AiOutlinePlusCircle/>,
        text1:"High Intencity Training",
        text2:"running in the nature"

    },
    {
        background: "linear-gradient(57deg,#ed97e9 0%, #9e19a1 80%)",
        image:fourth,
        icon:<BiDumbbell/>,
        topicon:<AiOutlinePlusCircle/>,
        text1:"High Intencity Training",
        text2:"running in the nature"

    }
]
const RecomendedChall=()=>{
    return(
        <div className="recomendedChall">
            <div className="reco-header">
              <h4>Recommeneded Challenges</h4>
              <div>
                <BiChevronLeft/>
                 <BiChevronRight/>
              </div>
             </div>
             <div className="carosal">
                { cerosalContainer.map((element,index)=>(
                <div className="carosal-item">
                      <img src={element.image} alt="caroselimage"  />
                      <div className="topsvg">{element.topicon}</div>
                      <div className="bottomsvg">{element.icon}</div>
                      <div className="text1">{element.text1}</div>
                      <div className="text2">{element.text2}</div>

                   
                </div>
              ) )}
        </div>
        </div>
    )

}


export default RecomendedChall;