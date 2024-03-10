import React from 'react'
import './card.css'
import insta from './images/image.png'
import twitter from './images/twitter.jpg'
// import facebook from './images/facebook.png'
export default function Contact() {

  return (

    <div>
    <div className='card-container'>
    <div className='card'>
    <h2 style={{color:"black",textSizeAdjust:"12px",fontFamily:"Times new Roman"}}>Head Office</h2>
    <br/>
    <h3 style={{color:"black"}}>Pavani Villa, 6-3-533 to 535</h3>
    <h4 style={{color:"black"}}> Plot 10, Dwarakpuri Colony, 
         Punjagutta, Hyderabad, Telangana
          – 500082</h4>
        </div>


        <div className='card'>
    <h2 style={{color:"black",textSizeAdjust:"12px",fontFamily:"Times new Roman"}}>Contact Us</h2>
    <br/>
    <h3 style={{color:"black"}}>EventManagment@gmail.com</h3>
    <h4 style={{color:"black"}}> +1234567890</h4>
    <br/>
    <h4 style={{color:"black"}}>Social Media</h4>
   <a href='https://www.instagram.com/direct/inbox/?next=%2F&hl=en'><img src={insta} alt='instalogo' height='40px' width='40px'/></a>
  <a href='https://www.instagram.com/direct/inbox/?next=%2F&hl=en'><img src={twitter} alt='twitter' height='45px' width='45px'/></a> 
   {/* <a href='https://www.instagram.com/direct/inbox/?next=%2F&hl=en'><img src={facebook} alt='facebook' height='48px' width='50px' /></a>   */}
        </div>
       


        <div className='card'>
    <h2 style={{color:"black",textSizeAdjust:"12px",fontFamily:"Times new Roman"}}>Locations</h2>
    <br/>
    <h3 style={{color:"black"}}>Vijayawada<br/>
    Guntur<br/>Hyderabad<br/>Vizag</h3>
    
        </div>
    </div>
    </div>
    
  )
}



