import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import  './Mainpage.css'
 function Mainpage() {
 
  return (
    <div>
       <h1>fuyfuhlkhjkbjbhkjgkugkjb,mnb,bkjbkjgkjbk,bbklk</h1>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block "
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/33406/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
  </div>
  )
}
 export default Mainpage