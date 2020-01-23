import React from 'react'
import './UserOutput.css'

const UserOutput = (props) =>{
  return(
    <div className="UserOutput">
      <p>User Name: {props.userName}</p>
      <p>Some More Text</p>
    </div>
  )
}

export default UserOutput