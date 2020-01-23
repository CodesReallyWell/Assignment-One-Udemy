import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
  return(
    <div className="UserInput">
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.currentName}/>
    </div>
  )
}

export default UserInput