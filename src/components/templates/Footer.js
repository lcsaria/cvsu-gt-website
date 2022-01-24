/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Container } from 'react-bootstrap'
import gov from '../../assets/gov.png'
function Footer() {
    return (
        <footer className="bg-dark sticky-footer  mt-4" 
        style={{ boxShadow: "0px 4px 5px"}}>
          <div class="subfooter">
            <Container>
              <div class="row">
              <div class="col-sm-3">
                  <div id="media_image-11" class="widget widget_media_image">
                    <div class="widget-content">
                      <a href="https://www.gov.ph/">
                        <img width="161" height="179" src={gov} class="" alt="" loading="lazy"/>
                          </a>
                        </div>
                      </div>                       
                </div>
                <div class="col-sm-3 mt-3">
                <span class="text-bold">OTHER LINKS</span>
                <li class="list-group mt-3">
                    <a href="https://www.cvsu.edu.ph/" target="_blank" rel="noreferrer" className='link-light text-decoration-none'>
                      CvSU Main Campus
                    </a>
                    <a href="https://www.generaltrias.gov.ph/" target="_blank" rel="noreferrer" className='link-light text-decoration-none'>
                      General Trias Government
                    </a>
                  </li>
                </div>
                <div class="col-sm-3 mt-3">
                  <span class="text-bold mt-3">CONTACT US</span>
                   <li class="list-group mt-3">
                     <p className='text-light'>
                      Town Proper, Vibora, General Trias Cavite
                      Phone: (046) 437-0693
                    </p>
                  </li> 
                </div>
                <div class="col-sm-3 mt-3">
                <span class="text-bold">FOLLOW US</span>
                <ul class="list-group">
                  <li class="list-group p-2">
                    <a href="https://www.facebook.com/CvSUgeneraltrias2012" target="_blank" rel="noreferrer" className="fa fa-facebook link-light text-decoration-none" />
                  </li>
                </ul>
                </div>
              </div>
            </Container>
          </div>
          <div className="text-center my-auto copyright">
            <span>Copyright © CvSU GenTri 2021</span>
          </div>
        </footer>
    )
}

export default Footer
