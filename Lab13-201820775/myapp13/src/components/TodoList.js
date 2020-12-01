import React,{useState} from 'react';
import Form from './Form';
import List from './List';
import {useSelector} from "react-redux";
import todo from "../reducers/todo";


const TodoList=()=>{

    const todoLs=useSelector(state=>state.todo)

        return(
            <div>
                <span>Total: {todoLs.length}   </span>
                <sapn>Done: {todoLs.filter(v=>v.completed===true).length}</sapn>
                <Form/>
                <List/>
            </div>
        )

}

export default TodoList;