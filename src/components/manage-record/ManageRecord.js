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
        <div className="row">
          <div className="col-md-6 text-nowrap">
            <div
              id="dataTable_length"
              className="dataTables_length"
              aria-controls="dataTable"
            />
          </div>
          <div className="col-md-6">
            <div
              className="text-md-right dataTables_filter"
              id="dataTable_filter"
            >
              <label>
                <input
                  type="search"
                  className="form-control form-control-sm"
                  aria-controls="dataTable"
                  placeholder="Search..."
                />
                <span className="search-icon">
                  <i class="fas fa-search"></i>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div
          className="table-responsive table mt-2"
          id="dataTable-1"
          role="grid"
          aria-describedby="dataTable_info"
        >

              <table className="table my-0" id="dataTable">
              <thead>
              <tr>
              <th scope="col">File Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Type</th>
                        <th scope="col">Created by</th>
                        <th scope="col">Updated by</th>
                        <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            <th scope="row">1</th>
                        <td>Memo no. 1</td>
                        <td>LBPascua</td>
                        <td>Memo</td>
                        <td>01/01/21 10:00AM</td>
                        <td>01/01/21 10:00AM</td>
                        <td>
                          <a href="/manage-record" ><i className="fas fa-users mr-4"/></a>
                          <i className="fas fa-trash mr-4"/>
                        </td>
            </tbody>
            <tfoot>
              <tr />
            </tfoot>
            </table>
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

export default ManageRecord
