import React from 'react'
import Footer from '../templates/Footer'
import Navbar from '../templates/Navbar'
import Sidebar from '../templates/Sidebar'

function UploadRecord() {
    return (
      <div id="wrapper">
          <Sidebar/>
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Navbar/>
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4" />
            </div>
            <div className="container">
              
            <div className="card mb-1 d-block">
              <div className="card-body">
                  <span className="card-title card text-center p-2"
                  style={{position: "relative", top: "-30px",  border: 
                  "1px black solid",display: 'block',
                  width: '200px'}}>
                    <b className="text-uppercase text-dark">Upload Record</b>
                  </span>
                  <div className="ml-5 p-2">
                    <div className="">
                      <div className="mb-4">
                        <label for="formGroupExampleInput" className="form-label ">FILE NAME</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="File Name"/>
                      </div>
                      <div className="mb-4">
                        <label for="formGroupExampleInput" className="form-label">FILE TYPE</label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>---</option>
                          <option value="1">Memo</option>
                          <option value="2">File</option>
                          <option value="3">Resolution</option>
                        </select>
                      </div>
                      <div class="mb-4">
                          <label for="formFile" class="form-label">ATTACHMENT</label>
                          <input class="form-control" type="file" id="formFile"/>
                        </div>
                        <div class="d-grid gap-2 mb-3">
                          <button class="btn btn-success" type="button">SUBMIT</button>
                        </div>
                  </div>
                </div>
              </div>
             </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
}

export default UploadRecord
