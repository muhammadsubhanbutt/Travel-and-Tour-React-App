import React from 'react'
import ContactImag from "/src/assets/ser.jpg"
import Hero from '../Hero/Hero'
import ContactForm from './ContactForm'

function Contact() {
  return (
   <>
      <Hero
        image={ContactImag}
        cImg="AboutImg"
        title="Contact Our Travel Experts"
        cName="hide"
      />
      <div style={{ marginTop:'-70px' }}>
        <h2 style={{ textAlign:'center' }}>Send a message to us!</h2>
        <ContactForm/>
      </div>
    </>
  )
}

export default Contact