import React from "react";
import { Col, Row } from "reactstrap";
import './footer.css';
import PersonLogo from '../../images/personlogo.png';

function Footer(){
    return(
        <div className="main-footer">
            <Row>
                <Col sm={12} md={6}>
                    <div className="main-text-footer">
                        <h1>Meet your instructor</h1>
                        <p>Hi! I’m Abbie and I'm a GCSE and A-Level French & Spanish teacher. Over the last 3 years, I’ve helped hundreds of students learn French & Spanish more effectively, improve their exam technique, and achieve top grades in their examinations.

I’m on a mission to help students fulfil their French & Spanish learning goals while creating affordable ways to access this education. I have launched live workshops and knowledge packed resources to help you achieve your goals of achieving top grades.

Why not let me start helping you ACE your exams! Come join me!  </p>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className="main-img-footer">
                        <img src={PersonLogo} />
                    </div>
                </Col>
                
            </Row>
        </div>
    )
}

export default Footer;