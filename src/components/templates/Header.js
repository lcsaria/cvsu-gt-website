import React from 'react'
//import { format} from 'date-fns'


function Header() {
    
    //var today = new Date();
    //var f = format(today, "yyyy-MM-dd")
    
    return (
    <div className="fixed">
        <div className="container">
        <div className="row">
            <div className="col-lg-8 mx-auto">
            <h1 className="brand-heading" style={{ fontSize: 72 }}>
                CvSU-General Trias
            </h1>
            <p className="intro-text">
                The Tenth Satellite Campus of the Cavite State University located at
                the heart of Cavite.
                <br />
            </p>
            <a className="btn btn-link btn-circle" role="button" href="#about">
                <i className="fa fa-angle-double-down animated" />
            </a>
            </div>
        </div>
        </div>
    </div>
        )
}

export default Header
