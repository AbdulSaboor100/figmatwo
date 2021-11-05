import React from "react";
import { Col, Row } from "reactstrap";
import './main-footer.css';

function MainFooter(){
    return(
        <div className="main-footer-div">
            <Row>
                <Col sm={12} md={6} >
                    <div className="main-footer-cont">
                            <div>
                        <ul>

                            <li className="li1">Powered by Sundae</li>
                        </ul>

                            </div>
                        
                    </div>
                </Col>
                <Col sm={12} md={6}>
                <div className="main-footer-cont2">
                    <ul>
                        <li className="li2">Terms and Conditions </li>
                        <li className="li3">Privacy  Policy </li>
                    </ul>

                </div>
                            
                </Col>
            </Row>
        </div>
    )
}

export default MainFooter;