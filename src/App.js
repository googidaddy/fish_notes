import React, {useEffect} from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import Form from './components/form'

import { initializeNotes, UserNotes } from './reducers/noteReducer'
import { init_user } from './reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.user)

  console.log(state,"is me")
  useEffect(() => {
      // dispatch(UserNotes(state.user[0].name))
    dispatch(initializeNotes()) && dispatch(init_user())
  }, [dispatch])
  // console.log(state.user[0].hasOwnProperty("name"));
  // console.log(state.user.length);
  return (
    <div>
      <h1>Notes</h1>
      {state.length !== 0  ? <div><p>Hi {state[0].name}! </p></div> : <Form />}
      <NewNote />
      <VisibilityFilter />
        <Notes />
    </div>
  )
}

export default App