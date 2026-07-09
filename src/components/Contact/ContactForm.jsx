import React, { useState } from "react";
import "./Contact.css";
function ContactForm() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="contactForm">
      <form
        
      >
        <label htmlFor="Name"></label>
        <input
         placeholder="Name"
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="Email"        />
        <label htmlFor="subject"></label>
        <input
          type="text"
          placeholder="Subject"
        />
        <label htmlFor="feedback"></label>
        <textarea
          id="feedback"
          name="feedback"
          rows="4"
          cols="50"
          placeholder="Message"
        ></textarea>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          type="submit"
          style={{
            backgroundColor: isHovered ? "#121212" : "#000",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
