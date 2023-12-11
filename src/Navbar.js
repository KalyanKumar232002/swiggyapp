import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'; 
import Logo from './Image/Logo.jpg'; // Adjust the path accordingly
// import Footer from './Footer';
// import Register from './Register';

import Login from './Login';
// import Mainpage from './Mainpage';
// import Grid from './Grid';




function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
        
      <nav class="navbar fixed-top navbar-expand-lg bg-light" data-bs-theme="light">
        
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#"> */}
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt='logo' width="250px" height="70px"/>
            </Link>
            {/* </a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link class="nav-link active" href="#" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " href="#" to="/about">About</Link>
              </li>
              <li class="nav-item">
           
                <Link class="nav-link " href="#" to="/contact">Items</Link>
                
              </li>
              {/* <li class="nav-item ">
                 <Link class="nav-link" href="#" to="/cart">Biryani</Link> 
              </li>
             */}
              <Dropdown>
           <Dropdown.Toggle variant="" id="">
           <img src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?b=1&s=612x612&w=0&k=20&c=2CBPkgQI2PiNySSNi1tvwVSYFqOBgfgrgDPCyelIVrk="
            alt="" 
            className="dropdown-icon" 
            style={{ width: '30px', height: '30px' }}/>
              Hyderabad Biryani
            </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/Biryani">Chicken Biryani</Dropdown.Item>
        <Dropdown.Item href="#/mutton">Mutton Biryani</Dropdown.Item>
        <Dropdown.Item href="#/fish">Fish Biryani</Dropdown.Item>
        <Dropdown.Item href="#/veg">Veg Biryani</Dropdown.Item>
        <Dropdown.Item href="#/paneer">Paneer Biryani</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
            
        <Dropdown>
           <Dropdown.Toggle variant="" id="">
           <img src="https://www.thedailymeal.com/img/gallery/daily-meal-survey-what-is-your-favorite-topping-to-add-to-your-burger/intro-1670318422.jpg"
            alt="" 
            className="dropdown-icon" 
            style={{ width: '30px', height: '30px' }}/>
              Burger
            </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/Burger">Euphoria Burger</Dropdown.Item>
        <Dropdown.Item href="#/virgo">Virgo Burge</Dropdown.Item>
        <Dropdown.Item href="#/awkening">Burger Awakening</Dropdown.Item>
        <Dropdown.Item href="#/bachelors">Bachelors Burger</Dropdown.Item>
        <Dropdown.Item href="#/hangry">Hangry Burger</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
           <Dropdown.Toggle variant="" id="">
           <img src="https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="" 
            className="dropdown-icon" 
            style={{ width: '30px', height: '30px' }}/>
            IceCream
            </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/ice">Chocolate ice</Dropdown.Item>
        <Dropdown.Item href="#/vanilla">Vanilla ice</Dropdown.Item>
        <Dropdown.Item href="#/strawberry">Strawberry</Dropdown.Item>
        <Dropdown.Item href="#/mit">Mint Chocolate Chip</Dropdown.Item>
        <Dropdown.Item href="#/rocky">Rocky Road</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
           <Dropdown.Toggle variant="" id="">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRC080QD_J5jv9g4e7ai1pl_78dAcQn9eKTEP0IJwD-0vo5djZx6EQzyI5M0y8P77LgwE&usqp=CAU"
            alt="" 
            className="dropdown-icon" 
            style={{ width: '30px', height: '30px' }}/>
            juices
            </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/juice">Mango Juice.</Dropdown.Item>
        <Dropdown.Item href="#/pineapple">Pineapple Juice</Dropdown.Item>
        <Dropdown.Item href="#/watermelon">Watermelon Juice</Dropdown.Item>
        <Dropdown.Item href="#/strawberry">Strawberry juice</Dropdown.Item>
        <Dropdown.Item href="#/coconut">Coconut Water</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
           <Dropdown.Toggle variant="" id="">
           <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="" 
            className="dropdown-icon" 
            style={{ width: '30px', height: '30px' }}/>
            Veg&Nonveg currys
            </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/curry">chicken curry</Dropdown.Item>
        <Dropdown.Item href="#/paneer">Paneer curry</Dropdown.Item>
        <Dropdown.Item href="#/vegtable">vegitable curry</Dropdown.Item>
        <Dropdown.Item href="#/egg">Egg curry</Dropdown.Item>
        <Dropdown.Item href="#/mutton">mutton curry</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </ul>
            
            {/* <form className="d-flex" onSubmit={handleSearch}>
              <input
               className="form-control me-sm-2"
                type="search" 
                 placeholder="Search"
                  style={{width:"500px"}}
                   value={searchTerm}
        onChange={handleInputChange}>


        </input>
  </from>*/}

        
             <div className="collapse navbar-collapse" id="navbarColor03"></div>
           <button className="btn btn-secondary my-2 my-sm-0" onClick={handleSearch}>
              <BsSearch />
            </button>    
             {/* <button className="btn btn-secondary my-2 my-sm-0" type="submit"> <BsSearch />Search</button>    */}

{/*             
            <div class="collapse navbar-collapse" id="navbarColor03"></div>  */}
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlw4bn3PVsWTW7k69bWRT8vjcidAPXGhJ_n-zHuN0gwyzEiVd6IrQ7lmYSiiGyPaA_Mc&usqp=CAU" alt="Company Logo" className="me-3" style={{ maxHeight: '80px' }} />
            
          </div>
           
          <Login/>
          </div>
          {/* <div><Register/></div> */}
         
        
      </nav>
      {/* <Mainpage/>
      <Grid/>
      <Footer/> */}
      
      
      
    </div>
    
    
    
  )
}

export default Navbar;