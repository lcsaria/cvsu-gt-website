/* eslint-disable no-sequences */
import React from 'react'
import Header from '../templates/Header'
import bg from './../../assets/school-building.svg'
import Navbars from '../templates/Navbar'
import video1 from '../../assets/videos/CvSU GTCC AVP.mp4'

import AnimatedNumber from 'react-animated-number';
import { Container } from 'react-bootstrap'
import Footer from '../templates/Footer'
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
        <div class="text-center mt-4">
                <video class="border border-1" src={video1} controls="controls"/>
        <div class="text-center d-flex justify-content-center mt-4">
        <div class="row mr-5">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h6 class="">STUDENTS</h6>
                    <h1 class="card-subtitle mb-2 text-muted">
                    <AnimatedNumber component="text" value={1975}
                        style={{
                            transition: '0.8s ease-out',
                            fontSize: 48,
                            transitionProperty:
                                'background-color, color, opacity'
                        }}
                        frameStyle={perc => (
                            perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                        )}
                        duration={1500}
                        stepPrecision={0}/>
                    </h1>
                </div>
            </div>
        </div>
        <div class="row mr-5">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h6 class="">FACULTY</h6>
                    <AnimatedNumber component="text" value={50}
                        style={{
                            transition: '0.8s ease-out',
                            fontSize: 48,
                            transitionProperty:
                                'background-color, color, opacity'
                        }}
                        frameStyle={perc => (
                            perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                        )}
                        duration={1000}
                        stepPrecision={0}/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h6 class="">STAFF</h6>
                    <AnimatedNumber component="text" value={5}
                        style={{
                            transition: '0.8s ease-out',
                            fontSize: 48,
                            transitionProperty:
                                'background-color, color, opacity'
                        }}
                        frameStyle={perc => (
                            perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                        )}
                        duration={1000}
                        stepPrecision={0}/>
                </div>
            </div>
        </div>
        </div>
        </div>
       </Container>
       <Footer/>
      </div>
    )
}

export default Home
