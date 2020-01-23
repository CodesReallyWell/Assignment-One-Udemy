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

  const nameChangeHandler = (event) => {
    setUserNameState({
      users: [
        { user: event.target.value, pass: 'test'}
      ]
    })
  }

  return (
    <div>
      <UserInput changed={nameChangeHandler}
                 currentName={usernameState.users[0].user}/>
      <UserOutput Name={usernameState.users[0].user} userName={usernameState.users[0].user} />
    </div>
  )
}

export default App;
