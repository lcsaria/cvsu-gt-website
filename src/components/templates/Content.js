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
             {/* CONTENT */}
       </Container>
       <Footer/>
      </div>
    )
}

export default Content
