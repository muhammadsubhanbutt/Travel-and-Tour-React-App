import React from 'react';
import "./SignUp.css"
import { useState } from 'react';
function SignUp() {
   const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='sign-up-form' >
      <h2 style={{ textAlign:'center' }}>Sign Up</h2>
      <form 
        >
    
        <label htmlFor="first-name"></label>
        <input type="text" placeholder='First Name' 
        
        />
         <label htmlFor="last-name"></label>
        <input type="text" placeholder='Last Name' 
       
        />
         <label htmlFor="email"></label>
        <input type="email" placeholder='Email' 
        />
         <label htmlFor="password"></label>
        <input type="password" placeholder='Password' 
        id='2'
        />

<label htmlFor="confirm-password"></label>
        <input type="password" placeholder='Confirm Password' id='1'
        />

        <button type='submit'
        id='one'
         onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          type="submit"
          style={{
            backgroundColor: isHovered ?  '#121212' : '#000',
          }}
        >Submit</button>
      </form>
    </div>
  )
}

export default SignUp