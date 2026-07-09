import React from 'react'

function FooterLinks({h3,p1,p2,p3,p4}) {
  return (
    <div>
    <div className="link" style={{ marginTop:'50px' }}>
      <h3 >{h3}</h3>
      <h5 style={{ marginTop:'5px' }}>{p1}</h5>
      <h5 style={{ marginTop:'5px' }}>{p2}</h5>
      <h5 style={{ marginTop:'5px' }}>{p3}</h5>
      <h5 style={{ marginTop:'5px' }}>{p4}</h5>
    </div>
    </div>
  )
}

export default FooterLinks