import React from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css';

export default function About() {
    let navigate = useNavigate();
  return (
    <div className="about-page">About
        <button onClick={()=>{navigate('/aboutDetails')}}>back to home page</button>
        <div className="container">
        <div className="left-child">
          <h1><i>Food culture in Hyderabad</i></h1>
          <p><i>Hyderabad is heaven for every foodie out there. The Pearl city of India offers a rich and vibrant food culture that will satisfy your taste buds. Hyderabadi food is a unique blend of Turkish, Mughal, Arabic and Telugu cultures. And the best thing is you get to savour this unique blend of flavours with us.
            <br/>Whether it's slow-cooked mutton, Mutton Dalcha, or Sheer Korma, Swiggy delivers some of the most delicious Hyderabadi cuisines right to your doorstep. Delicious food from popular cafes, eateries, and local food joints gets delivered across the city in no time. So when placing your online food order in Hyderabad, you need to find a restaurant near you that serves your favourite dish and relish in the unique flavours of Hyderabadi cuisines.</i></p>
        <h1><i> Is Swiggy Available in Hyderabad?</i></h1>
        <p><i>Yes. Swiggy delivers food across more than 40 neighbourhoods in Hyderabad, such as Banjara Hills, Raidurgam, Uppal, Ameerpet, Somajiguda & Khairatabad, Abids & Koti, Suncity & Bandlaguda, Vanasthalipuram and many more.
        <br/> As you look for the best restaurants for 24-hour food delivery in Hyderabad, look for high-rated restaurants in user ratings. Add your favourite snacks and food items to the cart and apply the suggested coupon codes. You can also use the different discounts offered by Swiggy.<br/>Swiggy helps you find the most affordable restaurants in Hyderabad without much hassle. Once you enter your location, you are presented with various cafes, food joints and restaurants near you. Use the search filter "Cost: Low to High" to find the best restaurants that fit your budget.</i></p>
        <h1><i> How to save money on Swiggy online food orders?</i></h1>
        <p><i>A. There are plenty of ways to save money on your Swiggy food orders. You can use the search filters to find the most affordable restaurants, cafes and food joints near you. Swiggy offers numerous discounts and promo codes that you can use to get discounts on your bill amount. You can also look for free delivery options to save money on delivery charges.

        Yes. Swiggy offers a cash-on-delivery payment option for orders in Hyderabad. Make sure you select the cash-on-delivery option while placing your order, and keep the cash ready to pay when your order gets delivered.</i></p>
        <h1><i>Enjoy the Unique Blend of Flavours of Local and Exotic Cuisines.</i></h1>
        <p><i>Did you know Hyderabad has bagged the 'Creative City of Gastronomy' title by UNESCO? Why wouldn't it? Hyderabadi food is renowned for its rich flavours and various snacks, main courses and desserts. Beyond the famous Hyderabadi Biryani, there are countless delicacies to relish, such as Haleem, Mutton Dalcha, Shikampuri Kebab, Nazaqati Boti Kebab, Khubani ka Meetha and Hyderabadi Phirni. Apart from authentic Hyderabadi dishes, leave room for international cuisines like Mexican, Italian, Chinese, Thai, Taiwanese and Japanese to surprise your taste buds.</i></p>
        </div>
        <div className="right-child">
          <center><img
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
            alt="Your Image"
            style={{ backgroundColor: 'white'  }}
             /></center>
             <br/>
              <center><img
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
            alt="Your Image"
            style={{ backgroundColor: 'white' }}
             /> </center>
             <center><img
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"
            alt="Your Image"
            style={{ backgroundColor: 'white' }}
             /> </center>
             <center><img
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png"
            alt="Your Image"
            style={{ backgroundColor: 'white' }}
             /> </center> 
             {/* <center><img
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
            alt="Your Image"
            style={{ backgroundColor: 'white' }}
             /> </center>  */}
        </div>
      </div>
        
</div>
    
  )
}
