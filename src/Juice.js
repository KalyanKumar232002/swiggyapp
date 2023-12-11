import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Card, Button } from 'react-bootstrap'; 
export default function Juice() {
  return (
    <div>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=400"
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
          src="https://images.pexels.com/photos/161440/smoothie-fruit-vegetables-salad-beetroot-carrots-161440.jpeg?auto=compress&cs=tinysrgb&w=400"
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
          src="https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=400"
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
    <div className="row">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/990439/pexels-photo-990439.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title>icecream parler</Card.Title>
        <Card.Text>
          special ice<br/>Tolichowki
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/2082617/pexels-photo-2082617.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title>WoW</Card.Title>
        <Card.Text>
          blackIce<br/>Sri rama colony
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title>Haldiram's</Card.Title>
        <Card.Text>
          specilhunt ice<br/>Madhapur
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1148215/pexels-photo-1148215.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title>Hitech Bawarchi</Card.Title>
        <Card.Text>
          icecream,black<br/>Madhapur
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/3676/girl-morning-breakfast-orange-juice.jpg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title>wooo</Card.Title>
        <Card.Text>
         Sweets,desserts<br/>jubilee hills
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
     </div>
    </div>
  )
}
