import React from 'react'
import AboutImag from "/src/assets/night.jpg"
import Hero from '../Hero/Hero'
function About() {
  return (
    <>
      <Hero
        image={AboutImag}
        cImg="AboutImg"
        title="Your Trusted Travel Partner"
        cName="hide"
      />
      <div  style={{ padding:'10px 40px', marginTop:'-70px'}}>
        <h2>Our History</h2>
        <p style={{ textAlign:'left' , margin:'10px 15px', fontSize:'14px'}}>Founded with a passion for travel and exploration, Trippy was created to help people discover amazing destinations and create unforgettable memories. Over the years, we have connected thousands of travelers with exciting tours, comfortable accommodations, and personalized travel experiences. Our commitment to quality and customer satisfaction continues to inspire every journey we plan.</p>
        <h2>Our Mission</h2>
        <p style={{ textAlign:'left' , margin:'10px 15px', fontSize:'14px'}}>Our mission is to make travel simple, enjoyable, and accessible for everyone. We strive to provide exceptional travel services, carefully planned itineraries, and reliable support that allow our customers to explore the world with confidence and peace of mind.</p>
        <h2>Our Vision</h2>
        <p style={{ textAlign:'left' , margin:'10px 15px',  fontSize:'14px'}}>
          Our vision is to become a trusted global travel partner, inspiring people to discover new cultures, breathtaking destinations, and unforgettable adventures. We aim to create meaningful travel experiences while promoting sustainable and responsible tourism for future generations.
        </p>
      </div>
    </>
  )
}

export default About