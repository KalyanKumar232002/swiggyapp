// import React from 'react'
// import { useNavigate } from 'react-router-dom'


//  export function Contact() {
//   let navigate = useNavigate();


//   return (
//     <div>
//       Contact
//         <button onClick={()=>{navigate('/contactDetails')}}>back to home page</button>
//         <div class="scroll-container">
//   <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
//   <img src="img_forest.jpg" alt="Forest" width="600" height="400">
//   <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400">
//   <img src="img_mountains.jpg" alt="Mountains" width="600" height="400">
// </div>
//        </div>
//   )
// }

// export default Contact;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Contact() {
  let navigate = useNavigate();

  return (
    <div>
      Contact
      <button onClick={() => { navigate('/contactDetails') }}>Back to home page</button>
      <div className="scroll-container">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8523266de1213e8ea57e5df4eedf747e" alt="Cinque Terre" width="600" height="400" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zoecoxnubcvdley21ybs" alt="Forest" width="600" height="400" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e6ouqiwqpw5vqmfih9s0" alt="Northern Lights" width="600" height="400" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3856420991a1a7368a369a5c14c2241f" alt="Mountains" width="600" height="400" />
      </div>
      <div className="row">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" />
      <Card.Body>
        <Card.Title>pizza hut</Card.Title>
        <Card.Text>
          pizzas<br/>Tolichowki
        </Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c2f533ee4960991a29227a27f516c59b" />
      <Card.Body>
        <Card.Title>Maharaja chat</Card.Title>
        <Card.Text>
          FastFood<br/>Sri rama colony
        </Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/edf8410c87fc2a56e2e047bec146702b" />
      <Card.Body>
        <Card.Title>Haldiram's</Card.Title>
        <Card.Text>
          Sweets, Bakery<br/>Madhapur
        </Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kwvmoc0nvrzuh5nshk7z" />
      <Card.Body>
        <Card.Title>Hitech Bawarchi</Card.Title>
        <Card.Text>
          Biryani, Chinese<br/>Madhapur
        </Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/evu59l76addywfczvlb9" />
      <Card.Body>
        <Card.Title>Vellanki Foods</Card.Title>
        <Card.Text>
         Sweets,desserts<br/>jubilee hills
        </Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>

    </div>
    </div>
  );
}

export default Contact;
