import React from 'react'
import Header from '../templates/Header'
import bg from './../../assets/cvsu-building.jpg'
import Navbars from '../templates/Navbar'

function Home() {

    return (
        <div className="maincontainer">
         <header class="masthead" style={{ 
            backgroundImage:`url(${bg})`,
            backgroundSize: `100% 140%` }}>
            <Navbars/>
        <div class="p-5 text-center mb-3">
            <h1 className="text-dark"><a href="https://cvsu.edu.ph/"
            rel="home" className='text-dark text-uppercase'>Cavite State University</a></h1>
            <p class="text-light">Truth Excellence Service</p>
            <Header/>
        </div>
            </header>
        {/* BODY */}
        
        
      </div>
    )
}

export default Home
