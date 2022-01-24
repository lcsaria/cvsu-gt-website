/* eslint-disable no-sequences */
import React from 'react'
import { Container } from 'react-bootstrap'


import Navbars from '../templates/Navbar'
import Footer from '../templates/Footer'

function ContactInformation() {

    return (
        <div className="maincontainer">
            <Navbars/>
        {/* BODY */}
        <Container className="p-3">
            <h3 class="text-uppercase fw-bolder">Contact Information</h3>
            <p className='mt-3'>
               Address: Town Proper, Vibora, Gen. Trias, Cavite
            </p>
       </Container>
       <Footer/>
      </div>
    )
}

export default ContactInformation
