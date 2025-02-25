import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: 'your_custom_color' }}>
        <div className='me-5 d-none d-lg-block text-white'>

          <span><h3>Get connected with us on social networks:</h3></span>
        </div>
        


         <div className='backgroundimg-white'>
          <a href='' className='me-4 text-reset '>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div> 
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 text-white'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p className='text-white'>
                About<br/>Career<br/>Team<br/>Swiggy One<br/>Swiggy Instamart<br/>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>We deliver to:</h6>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                    Bangalore
                  
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  Gurgaon
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  Hyderabad
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  Delhi
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Legal</h6>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                Terms & Conditions

                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  Cookie Policy
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p className='text-white'>
                <MDBIcon icon="home" className="me-2" />
                Help & Support
              </p>
              <p className='text-white'>
                <MDBIcon icon="envelope" className="me-3" />
                partner with us
              </p>
              <p className='text-white'>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p className='text-white'>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05) ' }}>
        © 2023 Bundl Technologies Pvt. Ltd
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Swiggy.com
        </a>
      </div>
    </MDBFooter>
  );
}