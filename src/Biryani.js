import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Card, Button } from 'react-bootstrap'; 
import './Burger.css';
import ExampleCarouselImage from './ExampleCarouselImage';
export default function Biryani() {
    const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage src="https://t4.ftcdn.net/jpg/04/36/36/57/360_F_436365754_z3i5Es0sFmZuLY6GZIzdiU01v9HqpGZe.jpg"
            alt="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg"
            alt="First slide"/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
            alt="First slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="row">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg" />
      <Card.Body>
        <Card.Title>Biryani hunt</Card.Title>
        <Card.Text>
        special biryani<br />Tolichowki
               
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/04/01/77/41/240_F_401774153_MJqEdOUOBSTypUQduq1udM11OA9Kj11w.jpg" />
      <Card.Body>
        <Card.Title>Paletturi Biryani</Card.Title>
        <Card.Text>
          FastBiryani<br/>Sri rama colony
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/00/90/99/00/240_F_90990026_TOpYSnzbQj9umMIYuEINsvwd64GhcVUv.jpg" />
      <Card.Body>
        <Card.Title>Haldiram's</Card.Title>
        <Card.Text>
          specil biryani<br/>Madhapur
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/01/14/51/60/240_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg" />
      <Card.Body>
        <Card.Title>Hitech Bawarchi</Card.Title>
        <Card.Text>
          Biryani, Chinese<br/>Madhapur
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/05/70/58/72/240_F_570587233_QnGdwC3XCpDQlbJk9akBtye6BN0Y97ZA.jpg" />
      <Card.Body>
        <Card.Title>dum biryani</Card.Title>
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
