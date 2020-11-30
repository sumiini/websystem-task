//action
let todoID=0;
export const createTodo=text =>({
    type:'CREATE_TODO',
    id: todoID++,
    text
})

export const  deleteTodo=id=>({
    type:'DELETE_TODO',
    id
})

export const toggleTodo=id=>({
    type:'TOGGLE_TODO',
    id
})
