import React from 'react'
import { Card, Button } from 'react-bootstrap';
export default function  ImageContainer() {
  return (
    <div>
        <div className="scroll-container">
        <img src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639565.jpg&fm=jpg" alt="Cinque Terre" width="600" height="400" />
        <img src="https://w0.peakpx.com/wallpaper/230/173/HD-wallpaper-food-burger.jpg" alt="Forest" width="600" height="400" />
        <img src="https://i.pinimg.com/736x/44/6e/ca/446eca35f719a54d7b18b2c40a4c691e.jpg" alt="Northern Lights" width="600" height="400" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPeRChBtLzltIpQnzHuQEc9cS4x2MFlHKZXGqRgUyqIKnUsf_gPRMjCSvTCvLRlas1TA&usqp=CAU" alt="Mountains" width="600" height="400" />
      </div>
      <div className="row">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://w0.peakpx.com/wallpaper/843/318/HD-wallpaper-burger-fastfood-bokeh-sandwich-meat-burger-thumbnail.jpg" />
      <Card.Body>
        <Card.Title>pizza hunt</Card.Title>
        <Card.Text>
          special pizza<br/>Tolichowki
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Card.Body>
        <Card.Title>WoW</Card.Title>
        <Card.Text>
          Fastpizza<br/>Sri rama colony
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://assets.afcdn.com/story/20211013/2141669_w2121h1590c1cx1061cy707cxt0cyt0cxb2121cyb1414.jpg" />
      <Card.Body>
        <Card.Title>Haldiram's</Card.Title>
        <Card.Text>
          specilhunt biryani<br/>Madhapur
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/2987564/pexels-photo-2987564.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title>Hitech Bawarchi</Card.Title>
        <Card.Text>
          pizza, Chinese<br/>Madhapur
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title>4 pic pizza</Card.Title>
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
