/* eslint-disable no-sequences */
import React from 'react'
import Header from '../templates/Header'
import bg from './../../assets/school-building.svg'
import Navbars from '../templates/Navbar'
import video1 from '../../assets/videos/CvSU GTCC AVP.mp4'


import { Container } from 'react-bootstrap'
import Footer from '../templates/Footer'
import Stats from '../templates/Stats'
function Home() {

    return (
        <div className="maincontainer">
            <Navbars/>
            <header class="masthead" style={{ 
            backgroundImage:`url(${bg})`,
            backgroundSize: `100% 150%`,
             }}>
        <div class="p-5 text-center">
            <Header/>
        </div>
        </header> 

        {/* BODY */}
        <Container>
        <div class="text-center mt-5 mb-5">
                <video  src={video1} controls="controls"/>
        </div>
        <div class="mt-5 mb-5">
            <Stats/>
        </div>
       </Container>
       <Footer/>
      </div>
    )
}

export default Home
