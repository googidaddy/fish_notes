import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

const NewNote = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state)
  const addNote = async (event) => {
    event.preventDefault()
    // 获取input: name= ''
    const content = event.target.note.value
    const object = {
      content: content,
      userId : user
    }
    event.target.note.value = ''

    // 抽象在reducer实现,只用专注于create.
    // const newNote = await noteService.createNew(content)
    
    dispatch(createNote(object))
  }

  return (
    <form onSubmit={addNote}>
    <input name="note" />
    <button type="submit">add</button>
  </form>
  )
}

export default NewNote