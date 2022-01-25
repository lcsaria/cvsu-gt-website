import React from 'react'
import { Container } from 'react-bootstrap'
import img from '../../assets/school-logo-small.png'

import Navbars from '../templates/Navbar'
import Footer from '../templates/Footer'

function UniversitySealAndHymn() {

    return (
        <div className="maincontainer">
            <Navbars/>
        {/* BODY */}
        <Container className="p-3">
            <h3 class="text-uppercase fw-bolder mb-5">University Seal And Hymn</h3>
            <h5>University Seal</h5>
            <div class="text-center">
                <img width={200} src={img} alt="Cvsu"/>
            </div>
            <div class="mt-5">
            The shape of the seal shall be square with one-third of its angles cut to form its base. It shall assume the shape of a space of a space capsule.<br/>
            The dominant colors of the University Seal are green and gold.<br/>
            The words "Cavite State University", Cavite , Philippines, 1906"  are written in gold against a dark green background around the periphery of the seal.<br/>
            <ol class="mt-5">
                <li>
                    The University Seal, the CvSU Seal is composed of interactive elements that represent the vision, thrusts, and programs of the University.
                </li>
                <li>  
                    The book and the torch at the center of the seal symbolizes knowledge and wisdom. It also represents education, the humanities and other social science programs of the University.
                </li>
                <li>   
                    The coffee twig with ripe berries at the right hand side of the book with torch symbolizes the major agricultural thrusts of the Province of Cavite. It also represents the agriculture and related programs of the University.
                </li>
                <li>   
                    The atomic structure at the left hand side of the book represents the science programs, and more importantly, the scientific research undertakings of the University.
                </li>
                <li>  
                    The gear at the bottom of the book with torch symbolizes engineering and technology programs of the University.
                </li>
                <li>  
                    The University Seal the figure 1906 written in gold against a dark green background placed below was the year CvSU had its humble beginnings as an intermediate school established in Indang, Cavite. The background for all elements is light green. The trilogy of functions of the University, which is instruction, research and extension, are symbolized by the over-all triangular shape of the seal.
                </li>
                <li>  
                    The flame of the torch is designed as "CvSU" which is adopted acronym of the Cavite State University. The Flame symbolizes the enduring and everlasting flame that will guide the University in its search for truth.
                </li>
            </ol>
            <div className="mt-4">
                <h5>University Hymn</h5>
                <br/>
                <p>
                Hail Alma Mater Dear<br/>
                CvSU all the way through<br/>
                Seat of hope that we dream of<br/>
                Under the sky so blue<br/>
                <br/>
                Verdant fields God's gift to you<br/>
                Open our lives a new<br/>
                Oh, our hearts, our hands, our minds, too<br/>
                In your bosom thrive and grow.<br/>
                <br/>
                Seeds of hope are now in bloom<br/>
                Vigilant sons to you have sworn<br/>
                To CvSU our faith goes on<br/>
                Cradle of hope and bright vision.<br/>
                <br/>
                These sturdy arms that care<br/>
                Are the nation builders<br/>
                Blessed with strength and power<br/>
                To our Almighty we offer.<br/>
                <br/>
                We Pray for CvSU<br/>
                God's Blessing be with you<br/>
                You're the master, we're the builders<br/>
                CvSU leads forever. <br/> 
                </p>
            </div>
            </div>
       </Container>
       <Footer/>
      </div>
    )
}

export default UniversitySealAndHymn
