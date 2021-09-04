import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({ note, handleClick }) => {
  return(
    <li onClick={handleClick}>
      {note.content} 
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  
  const user = useSelector(state => state.user)
  let id
  if (user.length === 0)
  {
    id = 0
  } else {
    id = user[0].id
    }
  
  // console.log(id);
  // const nottes = useSelector(state => state.notes.filter(note => note.user === id))
  // console.log(nottes);
  const notes = useSelector(({ filter, notes }) => {
    
    if (filter === 'ALL') {
      return notes.filter(note => note.user === id)
    }
    return filter  === 'IMPORTANT' 
      ? notes.filter(note => note.user === id && note.important)
      : notes.filter(note => note.user === id && !note.important)
  })

  return(
    <ul>
      {notes.map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() => 
            dispatch(toggleImportanceOf(note.id))
          }
        />
      )}
    </ul>
  )
}

export default Notes