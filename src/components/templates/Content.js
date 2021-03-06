import React from 'react'
import { Container } from 'react-bootstrap'


import Navbars from '../templates/Navbar'
import Footer from '../templates/Footer'

function Content() {

    return (
        <div className="maincontainer">
            <Navbars/>
        {/* BODY */}
        <Container className="p-3">
            <h3 class="text-uppercase fw-bolder">University Seal And Hymn</h3>
            <h5>University Seal</h5>
       </Container>
       <Footer/>
      </div>
    )
}

export default Content
