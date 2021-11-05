import React from "react";
import { Col, Row } from "reactstrap";
import './header.css'
import Image1 from '../../images/Image1.png'

function Header(){
    return(
        <div className="main-header">
            <Row>
                <Col sm={12} md={6}>
                    <div className="head-text-area">
                        <h1>Why Not Languages</h1>
                        <p>The new & exciting way to  learn0 GCSE & A Level French & Spanish! Why not let me start helping you ACE your exams! Come join me!</p>


                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className="head-img-area">
                        <img src={Image1} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default Header ; 