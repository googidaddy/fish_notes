// 定义reducer
import noteService from '../service/notes'

// state = []
const noteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'INIT_NOTES':
      return action.data
    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = { 
        ...noteToChange, 
        important: !noteToChange.important 
      }
      return state.map(note =>
        note.id !== id ? note : changedNote 
      )
    default:
      return state
  }
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

// Init-Notes
export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}

// InitializeUserNotes
export const UserNotes = (user) => {
  return async dispatch => {
    const notes = await noteService.getUserAll(user)
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}


// createNote
export const createNote = content => {
  console.log(content);
  return async dispatch => {
    const newNote = await noteService.createNew(content)
    console.log(newNote);
    dispatch({
      type: 'NEW_NOTE',
      data: newNote,
    })
  }
}



export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export default noteReducer