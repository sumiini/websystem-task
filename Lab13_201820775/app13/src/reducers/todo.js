
  function CREATE_TODO(state=createTodo.text,action){
    if(action.type=='CREATE_TODO'){
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        
        }
    

      ]

    }
  }
  function TOGGLE_TODO(state=toggleTodo.id,action){
    if(action.type==='TOGGLE_TODO'){
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    }
  }

// const todo = (state = [], action) => {
//     switch (action.type) {
//       case 'CREATE_TODO':
//         return [
//           ...state,
//           {
//             id: action.id,
//             text: action.text,
//             completed: false
//           }
//         ]
//       case 'TOGGLE_TODO':
//         return state.map(todo =>
//           (todo.id === action.id)
//             ? {...todo, completed: !todo.completed}
//             : todo
//         )
//       default:
//         return state
//     }
//   }
  
  export default todo


//reducer

/*

function CREATE_TODO(state=createTodo.text,action){
    if(action.type=='CREATE_TODO'){
       
    }
    
    return state

}

function DELETE_TODO(state=deleteTodo.id,action){
    
}

function TOGGLE_TODO(state=toggleTodo.id,action){
    
}



*/
