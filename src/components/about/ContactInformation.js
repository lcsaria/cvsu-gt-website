/* eslint-disable no-sequences */
import React from 'react'
import { Container } from 'react-bootstrap'

import Navbars from '../templates/Navbar'
import Footer from '../templates/Footer'
import MapLocation from '../templates/MapLocation'

function ContactInformation() {

    return (
        <div className="maincontainer">
            <Navbars/>
        {/* BODY */}
        <Container className="maincontainer p-3">
            <h3 class="text-uppercase fw-bolder">Contact Information</h3>
                <p className=''>
                <h5>
                Cavite State University - General Trias Campus
                </h5>
                    <i class="fas fa-map-marker-alt mr-3"/>
                    <span>
                    Town Proper, Vibora, Gen. Trias, Cavite<br/>
                    </span>
                    <i class="fas fa-phone mr-3"/>
                    <span>
                        (046) 437-0693<br/>
                    </span>
                    <MapLocation/>
                </p>      
       </Container>
       <Footer/>
      </div>
    )
}

export default ContactInformation
