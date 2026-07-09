import React from 'react'
import "./recentTrips.css"
function RecentTrips({Img,para,place}) {
  return (
    <div className='recent-trips'>
        <div className="main-content">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="para">
                <h2 className="titl">{place}</h2>
                <p>{para}</p>
            </div>
        </div>
    </div>
  )
}

export default RecentTrips