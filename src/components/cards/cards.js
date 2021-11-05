import React from "react";
import './cards.css'

function Cards({Image, paraDate,paraName,paraType}){
    return(
        
                            <div className="cards1">
                                <img src={Image} />
                                <p className="p1">{paraDate}</p>
                                <p className="p2">{paraName}</p>
                                <p className="p3">{paraType}</p>
                                <button>Register Now</button>
                            </div>

    )
}


export default Cards;