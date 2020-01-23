import React, {useState} from 'react'
import './App.css'
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'

const App = props => {

  const [usernameState, setUserNameState] = useState({
    users:[
      { user: 'Liam', pass: 'memes'}
    ]
  })

  return (
    <div>
      <UserInput/>
      <UserOutput userName={usernameState.users[0].user}/>
    </div>
  )
}

export default App;
