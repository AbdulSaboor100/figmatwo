import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import MainCont from '../components/main-area/main-cont';
import MainFooter from '../components/main-footer/main-footer';
import './home.css'

function Home(){
    return(
        <div className="main-container">
            <Header /> 
            <MainCont />
            <Footer />
            <MainFooter />
        </div>
    )
}

export default Home;