import React from 'react'
//import { format} from 'date-fns'


function Header() {
    
    //var today = new Date();
    //var f = format(today, "yyyy-MM-dd")
    
    return (
    <div className="fixed">
        <div className="container">
        <div className="row">
            <div className="p-5">
            <h1 className="brand-heading">
                CvSU-General Trias
            </h1>
            <p className="intro-text">
                The Tenth Satellite Campus of the Cavite State University located at
                the heart of Cavite.
                <br />
            </p>
            </div>
        </div>
        </div>
    </div>
        )
}

export default Header
