import React from 'react'
import "./Destination.css"
// import AboutImag from "/src/assets/night.jpg"

function Destination({cName,place,text,title,h2,Img1,Img2}) {
  return (
    <div className='popular-destination'>
      <h1>{title}</h1>
      <p>{h2}</p>
      <div className={cName}>
        <div className="left-content">
          <h2>{place}</h2>
          <p >{text}</p>
        </div>
        <div className="right-content">
          <div className="img1" >
            <img src={Img1} alt="" height="400px" width="300px" />
          </div>
           {/* right image */}
           <div className=" img2" >
            <img src={Img2} alt=""  height="400px" width="300px" className='rightImg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination