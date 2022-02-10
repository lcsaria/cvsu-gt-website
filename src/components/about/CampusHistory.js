import React from 'react'
import { Container } from 'react-bootstrap'


import Navbars from '../templates/Navbar'
import Footer from '../templates/Footer'

function CampusHistory() {

    return (
        <div className="maincontainer">
            <Navbars/>
        {/* BODY */}
        <Container className="p-3">
            <h3 class="text-uppercase fw-bolder">CAMPUS HISTORY</h3>
            <h5>Content</h5>
       </Container>
       <Footer/>
      </div>
    )
}

export default CampusHistory
