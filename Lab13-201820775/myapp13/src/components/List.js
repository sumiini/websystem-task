import React from 'react';
import {toggleTodo} from '../actions/todo';
import {deleteTodo} from '../actions/todo';
import {useDispatch, useSelector} from "react-redux";
import '../App.css';

const List =()=>{
    const dispatch=useDispatch();
    const todoLs=useSelector(state=>state.todo)
    console.log(todoLs.map(i=>i.text))

    return(
          <ul>
              <h2>Todo List</h2>
              {todoLs.map((i)=>(
                      <li id={"textLi"} key={i.id} style={{backgroundColor:i.completed?'green':'white'}}>
                          <span id={"spant"}>
                              {i.text}
                          </span>
                          <br/>



                          <form id={"delForm"}
                              onSubmit={e=>{
                                  e.preventDefault()
                                  dispatch(deleteTodo(i.id))
                              }}
                          >
                              <button type="submit" >삭제</button>
                          </form>

                          <form id={"togForm"}
                              onSubmit={e=>{
                                  e.preventDefault()
                                  dispatch(toggleTodo(i.id))
                              }}
                          >
                              <button type="submit" >완료</button>


                          </form>



                      </li>
                      ))}


          </ul>
    )


}



export default List;