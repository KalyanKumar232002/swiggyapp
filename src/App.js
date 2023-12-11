
import './App.css';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';

import Swiggy from './Swiggy';
import Nopage from './Nopage';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Biryani from './Biryani';
import Burger from './Burger';
import Ice from './Ice';
import Juice from './Juice';
import Curry from './Curry';

// import Allservice from './Allservice';



function App() {
  return (
    <div>
      
       <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Swiggy />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/biryani" element={<Biryani />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/ice" element={<Ice />} />
        <Route path="/juice" element={<Juice />} />
        <Route path="/curry" element={<Curry />} />
    
          {/* <Route path="/allservice" element={<Allservice/>}/> */}
          
           <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter> 

    





    </div>
  );
}

export default App;
