import React from "react";
import { Col, Row } from "reactstrap";
import './main-cont.css'
import Card1 from '../../images/card1.png'
import Card2 from '../../images/card2.png'
import Card3 from '../../images/card3.png'
import Card4 from '../../images/card4.png'
import Card5 from '../../images/card5.png'
import Cards from "../cards/cards";


const imgArray = [Card1 , Card2 ,Card3, Card4 , Card5 ]

function MainCont(){
    return(
        <div className="main-count-div">
            <Row>
                <Col sm={12} md={12} >
                    <div className="main-count-area">
                        <div className="sub-nav">
                            <ul>
                                <li className="liSpec">Workshops</li>
                                <li>Resources</li>
                                <li>Quizzes</li>
                            </ul>
                        </div>
                        <div className="sub-cards-area">
                         <Row>
                             {
                                 Array(5).fill().map(function(item, index){
                                     console.log(imgArray[index])
                                     return(
                                         <Col sm={6} md={3}>
                                        <Cards Image={imgArray[index]}  paraDate={"October 21, 2021"} paraName={<p>Introduction to <br /> Pronunication</p>} paraType={"Free"} /> 
                                        </Col>
                                     )
                                 })
                             }
                         </Row>
                      
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainCont