import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

const NewNote = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
 
  
  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    if (state.user.length !== 0) {
      const object = {
        "content": content,
        "important": true,
        "userId": state.user[0].id.toString()
      }
      dispatch(createNote(object))
    } 
  }

  return (
    <form onSubmit={addNote}>
    <input name="note" />
    <button type="submit">add</button>
  </form>
  )
}

export default NewNote