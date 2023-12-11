import React from 'react'
import {Link} from 'react-router-dom'
import Mainpage from './Mainpage';
import Grid from './Grid';
import Footer from './Footer';
// import Biryani from './Biryani';



export default function Swiggy() {
  return (
    
    <div>
    <Mainpage/>
      <Grid/>
    
      <Footer/>
      {/* <Biryani/> */}
      
        </div>
)
}