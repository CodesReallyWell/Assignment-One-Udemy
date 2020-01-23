import React from 'react'
import './UserOutput.css'

const UserOutput = (props) =>{
  return(
    <div className="UserOutput">
      <p>Original Username: {"Liam"}</p>
      <p>User Name: {props.userName}</p>
    </div>
  )
}

export default UserOutput