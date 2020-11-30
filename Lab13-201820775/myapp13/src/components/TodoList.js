import React from 'react';
import Form from './Form';
import List from './List';


class TodoList extends React.Component{

    render(){
        return(
            <div>
                <span>todo 의 개수와 완료된 todo 개수</span>
                <Form/>
                <List/>
    
            </div>
                
        )
    }
    
    
    
}

export default TodoList;