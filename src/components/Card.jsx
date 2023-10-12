import React from 'react'
import Profile from './Profile'
import Details from './Details'
import Header from './Header'

function Card({name,phone,img,email}) { 
    
  return (
    <div> 
        
        <div className="card">
        <div className="top">
         <Header myName={name} />
          <Profile newImg={img}/>
        </div>
        <div className="bottom">
         <Details info={phone}/> 
         <Details info={email}/> 
         <Details info="2057/09/01"/> 
  
        </div>
      </div>
    </div>
  )
}

export default Card