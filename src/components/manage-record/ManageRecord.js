import React from 'react'
import Footer from '../templates/Footer'
import Navbar from '../templates/Navbar'
import Sidebar from '../templates/Sidebar'

function ManageRecord() {
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
                    <b className="text-uppercase text-dark">Manage Record</b>
                  </span>

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">File Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Author</th>
                        <th scope="col">Created by</th>
                        <th scope="col">Updated by</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Memo no. 1</td>
                        <td>Memo</td>
                        <td>LBPascua</td>
                        <td>01/01/21 10:00AM</td>
                        <td>01/01/21 10:00AM</td>
                        <td>
                          <a href="/manage-record" ><i className="fas fa-users mr-4"/></a>
                          <i className="fas fa-trash mr-4"/>
                        </td>
                      </tr>
                      <tr>
                      <th scope="row">1</th>
                        <td>Memo no. 1</td>
                        <td>Memo</td>
                        <td>LBPascua</td>
                        <td>01/01/21 10:00AM</td>
                        <td>01/01/21 10:00AM</td>
                        <td>
                          <a href="/manage-record" ><i className="fas fa-users mr-4"/></a>
                          <i className="fas fa-trash mr-4"/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
             </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
}

export default ManageRecord
