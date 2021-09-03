import React, {useEffect, useState} from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import LoginForm from './components/loginform'


import { initializeNotes } from './reducers/noteReducer'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  // const user = useSelector(state => state.notes[0].name)
  const user = null
  console.log(user);
  const [loginVisible, setLoginVisible] = useState(false)
  
  
  const loginForm = () => {
    const hideWhenVisible = { display: loginVisible ? 'none' : '' }
    const showWhenVisible = { display: loginVisible ? '' : 'none' }
    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>log in</button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm  />
          <button onClick={() => setLoginVisible(false)}>cancel</button>
         </div>
        </div>
    )
  }
  // 初始化notes
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes())
    
  }, [dispatch])
  

  return (
    <div>
      <h1>Notes</h1>
      {user === null ? loginForm() : <div><p>Hi { user}! </p></div>}
        <NewNote />
        <VisibilityFilter />
        <Notes />
    </div>
  )
}

export default App