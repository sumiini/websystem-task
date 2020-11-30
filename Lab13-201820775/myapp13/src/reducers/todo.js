
const todo = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      case 'DELETE_TODO':
        return state.filter(todo =>
            todo.id !== action.id
        )
      default:
        return state
    }
  }
  
  export default todo



