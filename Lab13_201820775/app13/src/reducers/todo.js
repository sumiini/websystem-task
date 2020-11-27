//action
const  createTodo={
    type:'CREATE_TODO',
    id:todoID++,
    text
}

const  deleteTodo={
    type:'DELETE_TODO',
    id
}

const toggleTodo={
    type:'TOGGLE_TODO',
    id
}

//reducer
function CREATE_TODO(state=createTodo.text,action){
    if(action.type=='CREATE_TODO'){
        text:state.text
    }
    
    return state

}

function DELETE_TODO(state=deleteTodo.id,action){
    
}

function TOGGLE_TODO(state=toggleTodo.id,action){
    
}