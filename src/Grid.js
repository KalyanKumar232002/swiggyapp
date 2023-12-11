// import React from 'react';
import './Grid.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

// import Allservice from './Allservice';
import React, { useEffect,useState } from 'react';
import axios from 'axios';
function Grid() {
  const [ setSelectedLocality,setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:3208/fetchcard");
        setData(response.data);
      } catch (err) {
        throw err;
      }
    };

    fetchData();
  }, []);

  const handleLocalityClick = (locality) => {
    setSelectedLocality(locality);
  };
  const containerStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    marginBottom: '20px',
  };

  const headingStyle = {
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    // textAlign: 'center',
  };

  const paragraphStyle = {
    borderLeft: '1px solid #ddd',
    paddingLeft: '10px',
  };
  return (
    
    <div>
      <h2><center>What's on your mind ??</center></h2>
      <div className="scroll-container">
          {/* <h1 className="fixed-heading">Your Heading Goes Here</h1> */}
    
      
          
  <img src="https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   alt="Cinque Terre" width="250" height="200" style={{ borderRadius: '50%' }}/>
  <img src="https://images.pexels.com/photos/8753672/pexels-photo-8753672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   alt="Forest" width="250" height="200" style={{ borderRadius: '50%' }}/>
  <img src="https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=600" 
  alt="Northern Lights" width="250" height="200" style={{ borderRadius: '50%' }}/>
  <img src="https://images.pexels.com/photos/9609853/pexels-photo-9609853.jpeg?auto=compress&cs=tinysrgb&w=600"
  alt="Mountains" width="250" height="200" borderradios="100px" style={{ borderRadius: '50%' }}/>
  <img src="https://www.shutterstock.com/image-photo/chicken-biryani-kerala-style-dhum-600nw-1979734547.jpg"
  
  alt="Mountains" width="250" height="200" borderradios="100px" style={{ borderRadius: '50%' }}/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wAWcPOaX9lLqbDlKvgczYIJ2UGvyKXW85iKudcZNoX1PIZdOl75omuJB6j9GwF11X0k&usqp=CAU"
  alt="Mountains" width="250" height="200" borderradios="100px" style={{ borderRadius: '50%' }}/>
  <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg"
  alt="Mountains" width="250" height="200" borderradios="100px" style={{ borderRadius: '50%' }}/>
  <img src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg"
  alt="Mountains" width="250" height="200" borderradios="100px" style={{ borderRadius: '50%' }}/>
  <img src="https://t4.ftcdn.net/jpg/05/81/17/87/360_F_581178733_zFHFmHOcCYJgRoAUf7IRyCwPxBSTnOCf.jpg"
  alt="Mountains" width="250" height="200" borderradios="100px" style={{ borderRadius: '50%' }}/>
  <img src="https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?cs=srgb&dl=pexels-photomix-company-103566.jpg&fm=jpg"
  alt="Mountains" width="250" height="200" borderradios="100px" style={{ borderRadius: '50%' }}/>
 </div>
<h3><center>Top restaurant chains in Hyderabad</center></h3>
<div style={{backgroundColor:'white'}}>
 <div className="scroll-container"> 
    <div className="row">
      <Card style={{ width: '18rem' ,height:'100%', backgroundColor: 'white'}}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jan1qhdktprv9kgvy6pl" className="img-fluid" />
      <Card.Body style={{ background: 'white' }}>
        <Card.Title>Kodi kura Chitti Gara</Card.Title>
        <Card.Text>
          Biryani,North Indian,South Indian<br/>Chinese<br/>Biryani
          <br/>
          Hitec City
        </Card.Text>
        <div className="rating">
                <span className="rating-text">3.5</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href="Contact">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem',height:'100%' }}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8523266de1213e8ea57e5df4eedf747e" className="img-fluid"/>
      <Card.Body>
        <Card.Title>Varalaxmi tiffins</Card.Title>
        <Card.Text>
          South Indian<br/>Banjara Hills
        </Card.Text>
        <div className="rating">
                <span className="rating-text">4.5</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href=".">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem',height:'100%' }}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mpxavlqbiiog2dt8fkas" className="img-fluid" />
      <Card.Body>
        <Card.Title>theobroma</Card.Title>
        <Card.Text>
         Dessets<br/>Jubilee Hills
        </Card.Text>
        <div className="rating">
                <span className="rating-text">3</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href="Allservices">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'100%' }}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wqfwdpkn1qukct1bmzum" className="img-fluid"/>
      <Card.Body>
        <Card.Title>Cafe Niloufer Premium Lounge </Card.Title>
        <Card.Text>
          Bakery,Beverages,Snacks<br/>Banjara Hills
        </Card.Text>
        <div className="rating">
                <span className="rating-text">4.4</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href="Allservices">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'100%' }}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zoecoxnubcvdley21ybs" className="img-fluid"/>
      <Card.Body>
        <Card.Title>Lucky Restaurant</Card.Title>
        <Card.Text>
         Biryani, North Indian ,Tandoor<br/>Jubilee hills
        </Card.Text>
        <div className="rating">
                <span className="rating-text">4.5</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href="Allservices">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem',height:'100%' }}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c8b98c4064dc2fd6bdf350212e5f0bd5" className="img-fluid"/>
      <Card.Body>
        <Card.Title>NIC ice Creams</Card.Title>
        <Card.Text>
          Ice Creams, Desserts<br/>Shaikpet
        </Card.Text>
        <div className="rating">
                <span className="rating-text">5</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href="Allservices">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem',height:'100%' }}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6126c9b45de2cb222405c1af8a321e74" className="img-fluid"/>
      <Card.Body>
        <Card.Title>EatFit</Card.Title>
        <Card.Text>
          Chunese,Healty Food,Tandoor<br/>Jubilee Hills
        </Card.Text>
        <div className="rating">
                <span className="rating-text">3.5</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href="Allservices">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem' ,height:'100%'}}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ko6mw9xpjhnpbvn2if2w" className="img-fluid"/>
      <Card.Body>
        <Card.Title>Flavours of Taj Mahal Hotel</Card.Title>
        <Card.Text>
          North Indian,South Indian,Chinese<br/>Banjara Hills
        </Card.Text>
        <div className="rating">
                <span className="rating-text">4.2</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href="Allservices">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem',height:'100%' }}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0c958153eeb436db6d515ca36e47e8a4" className="img-fluid" />
      <Card.Body>
        <Card.Title>The Funnel Hills Creamery</Card.Title>
        <Card.Text>
          Desserts,Bakery,American<br/>Film Nagar
        </Card.Text>
        <div className="rating">
                <span className="rating-text">4.3</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href="Allservices">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card> 
    <Card style={{ width: '18rem',height:'100%' }}  className="col-md-4 mb-4">
      <Card.Img variant="top" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xk521bn3kaw3egn3shfr" className="img-fluid" />
      <Card.Body>
        <Card.Title>LO!-Low Card and Keti Foods</Card.Title>
        <Card.Text>
         Healthy Food,Keto, North Indian
         <br/>Madhapur
        </Card.Text>
        <div className="rating">
                <span className="rating-text">5</span>
                <span className="rating-symbol">⭐</span>
              </div>
              <Button style={{width:250,backgroundColor:'blueviolet'}} href="Allservices">
      Buy
    </Button>
        {/* <Button variant="primary">Buy</Button> */}
      </Card.Body>
    </Card> 
    </div>
    </div>
    </div>
    <div style={containerStyle}>

    <h1  style={headingStyle}><center>food culture in Hyderabad</center></h1>
    <h3  style={headingStyle}>Order Food from Your Favourite Restaurants in Hyderabad With Swiggy</h3>
    <p style={paragraphStyle}>Hyderabad is heaven for every foodie out there. The Pearl city of India offers a rich and vibrant food culture that will satisfy your taste buds. Hyderabadi food is a unique blend of Turkish, Mughal, Arabic and Telugu cultures. And the best thing is you get to savour this unique blend of flavours with us.<br/>
    Whether it's slow-cooked mutton, Mutton Dalcha, or Sheer Korma, Swiggy delivers some of the most delicious Hyderabadi cuisines right to your doorstep. Delicious food from popular cafes, eateries, and local food joints gets delivered across the city in no time. So when placing your online food order in Hyderabad, you need to find a restaurant near you that serves your favourite dish and relish in the unique flavours of Hyderabadi cuisines.</p>
<h5  style={headingStyle}>Sit back and enjoy your favourite dishes at your home.</h5>
<p style={paragraphStyle}>Hyderabad is home to millions of people who order food online. To cater to their needs, Swiggy partners with top-rated restaurants, cafes, and food joints to bring you a wide range of food menus.<br/>
No need to step out in the city traffic and spend hours waiting to get a table in a restaurant; you can get online food delivery in Hyderabad and savour your favourite dishes while watching your favourite movie or Netflix show.
</p>
<h5  style={headingStyle}>Enjoy the Unique Blend of Flavours of Local and Exotic Cuisines.</h5>
<p style={paragraphStyle}>Did you know Hyderabad has bagged the 'Creative City of Gastronomy' title by UNESCO? Why wouldn't it? Hyderabadi food is renowned for its rich flavours and various snacks, main courses and desserts. Beyond the famous Hyderabadi Biryani, there are countless delicacies to relish, such as Haleem, Mutton Dalcha, Shikampuri Kebab, Nazaqati Boti Kebab, Khubani ka Meetha and Hyderabadi Phirni. Apart from authentic Hyderabadi dishes, leave room for international cuisines like Mexican, Italian, Chinese, Thai, Taiwanese and Japanese to surprise your taste buds.</p>
<h3  style={headingStyle}>Frequently Asked Questions</h3>
<h5  style={headingStyle}>Q. Is Swiggy Available in Hyderabad?</h5>
<p style={paragraphStyle}>A. Yes. Swiggy delivers food across more than 40 neighbourhoods in Hyderabad, such as Banjara Hills, Raidurgam, Uppal, Ameerpet, Somajiguda & Khairatabad, Abids & Koti, Suncity & Bandlaguda, Vanasthalipuram and many more.</p>
<h5  style={headingStyle}>Q. Where can I find the best food delivery Hyderabad offers?</h5>
<p style={paragraphStyle}>A. As you look for the best restaurants for 24-hour food delivery in Hyderabad, look for high-rated restaurants in user ratings. Add your favourite snacks and food items to the cart and apply the suggested coupon codes. You can also use the different discounts offered by Swiggy.</p>
<h5  style={headingStyle}>Q. Where can I find affordable food delivery in Hyderabad?</h5>
<p style={paragraphStyle}>A. Swiggy helps you find the most affordable restaurants in Hyderabad without much hassle. Once you enter your location, you are presented with various cafes, food joints and restaurants near you. Use the search filter "Cost: Low to High" to find the best restaurants that fit your budget.</p>
<h5  style={headingStyle}>Q. Does Swiggy offer a cash-on-delivery option in Hyderabad?</h5>
<p style={paragraphStyle}>A. Yes. Swiggy offers a cash-on-delivery payment option for orders in Hyderabad. Make sure you select the cash-on-delivery option while placing your order, and keep the cash ready to pay when your order gets delivered.</p>
<h5  style={headingStyle}>Q. How to save money on Swiggy online food orders?</h5>
<p style={paragraphStyle}>A. There are plenty of ways to save money on your Swiggy food orders. You can use the search filters to find the most affordable restaurants, cafes and food joints near you. Swiggy offers numerous discounts and promo codes that you can use to get discounts on your bill amount. You can also look for free delivery options to save money on delivery charges.</p>

    </div>
   

<h1><center>Explore localities in and around Hyderabad</center></h1>
    <Stack direction="horizontal" gap={30}>
      <div className="p-2"><button onClick={() => handleLocalityClick('Mahmadpur')}  className="button-spacing" style={{ width: '225px', height: '50px' }}> Mahmadpur</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('Kodchera')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> Kodchera</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick(' Yadgarpalli')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> Yadgarpalli</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('korremal')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> korremal</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('pratapsingaram')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> pratapsingaram</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick(' pochampally')}   className="button-spacing" style={{ width: '220px', height: '50px' }}> pochampally</button></div>
    </Stack>
    <Stack direction="horizontal" gap={30}>
      <div className="p-2"><button onClick={() => handleLocalityClick(' Cmr College')}   className="button-spacing"  Cmr Collegestyle={{ width: '225px', height: '50px' }}> Cmr College</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick(' porur')}    className="button-spacing" style={{ width: '225px', height: '50px' }}> porur</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('Alibad')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> Alibad</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('Anantaram')}  className="button-spacing" style={{ width: '225px', height: '50px' }}> Anantaram</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick(' Bits')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> Bits</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('Toolkalan')}   className="button-spacing" style={{ width: '220px', height: '50px' }}> Toolkalan</button></div>
    </Stack>
    <Stack direction="horizontal" gap={30}>
      <div className="p-2"><button onClick={() => handleLocalityClick('Bomraspet')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> Bomraspet</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('athveli')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> athveli</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('athveli')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> athveli</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('Munaganur')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> Munaganur</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('Bogaram')}   className="button-spacing" style={{ width: '225px', height: '50px' }}> Bogaram</button></div>
      <div className="p-2"><button onClick={() => handleLocalityClick('Dindigil')}   className="button-spacing" style={{ width: '220px', height: '50px' }}> Dindigil</button></div>
    </Stack>
    {/* <Allservice/> */}

    </div>
  );
};

export default Grid;