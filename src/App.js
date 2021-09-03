import React, {useEffect} from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'

import Form from './components/form'
import { initializeNotes, UserNotes } from './reducers/noteReducer'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const state = useSelector(state => state)
  
  const dispatch = useDispatch()
  useEffect(() => {

    state.user.length !== 0 ?
      dispatch(UserNotes(state.user[0].name)):dispatch(initializeNotes())
  }, [dispatch])
  

  return (
    <div>
      <h1>Notes</h1>
      {state.user.length === 0  ? <Form /> : <div><p>Hi { state.user[0].name}! </p></div>}        <NewNote />
      <VisibilityFilter />
        <Notes />
    </div>
  )
}

export default App