/* eslint-disable no-sequences */
import React from 'react'
import { Container } from 'react-bootstrap'


import Navbars from '../templates/Navbar'
import Footer from '../templates/Footer'

function VisionMissionGoals() {

    return (
        <div className="maincontainer">
            <Navbars/>
        {/* BODY */}
        <Container className="p-3">
             <h3 class="text-uppercase fw-bolder">Vision, Mission and Goals</h3>
             
            <div className="mt-3">
                <br/>
                <h4 class="text-uppercase">University Vision</h4>
                <hr className='w-25'/>
                <p>
                    The premier university in historic Cavite recognized for excellence in the development of globally competitive and morally upright individuals.
                </p>
            </div>
             <br/>
             <div className='mt-3'>
                <h4 class="text-uppercase">University Mission</h4>
                <hr className='w-25'/>
                <p>
                    Cavite State University shall provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology through quality instruction and responsive research and development activities. It shall produce professional, skilled and morally upright individuals for global competitiveness.
                </p>
             </div>
             <div className='mt-3'>
                <br/>
                <h4>CvSU-GEN. TRIAS GOALS</h4>
                <hr className='w-25'/>
                <p>
                    The CvSU General Trias City Campus shall endeavor to achieve the following goals:
                    <ol>
                        <li>provide high quality instruction in order to produce, skilled, morally upright and globally competitive graduates;</li>
                        <li>develop and pursue advance research activities through arts, sciences, and technology to support instruction; and</li>
                        <li>develop and conduct extension activities that will empower people and communities</li>
                    </ol>
                </p>
             </div>
             <div className='mt-3'>
                <br/>
                <h4 class="text-uppercase">Core Values</h4>
                <hr className='w-25'/>
                <p className='text-uppercase fw-bold'>
                Truth, Excellence and Service
                </p>
             </div>
             <div className='mt-3'>
                <br/>
                <h4 className="text-uppercase">Quality Policy</h4>
                <hr className='w-25'/>
                <p>
                    We Commit to the highest standards of education, value our stakeholders, Strive for continual improvement of our products and services, and Uphold the University’s tenets of Truth, Excellence, and Service to produce globally competitive and morally upright individuals.
                </p>
             </div>
       </Container>
       <Footer/>
      </div>
    )
}

export default VisionMissionGoals
