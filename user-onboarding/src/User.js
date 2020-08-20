
import React from 'react'

export default function User({details}) {

    

    if (!details) {
        return <h3>Working fetching your friend&apos;s details...</h3>
      }
    
      return (
        <div className='user-div'>
          <h2>{details.first_name} {details.last_name}</h2>
          <h2>{details.username}</h2>
          <p>Email: {details.email}</p>
          <p>Role: {details.role}</p>
          <p>Password: {details.password}</p>
          <p></p>
    
        
            </div>
       
      )
}