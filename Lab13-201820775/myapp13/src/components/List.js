import React from 'react';
import {toggleTodo} from '../actions/todo';
import {deleteTodo} from '../actions/todo';
import PropTypes from 'prop-types'
import Form from './Form';
import * as todo from '../actions/todo';
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({ reducer: todo })



class List extends React.Component{

  constructor(props) {
    super(props);
    
  }

    render(){
        return(

          <ul>
            <h1>list</h1>

            <li>
              <span>
                {"text"+this.props.text}
              </span>
                  <form onSubmit={e=>{
                    e.preventDefault()
                    store.dispatch(toggleTodo())
                    
                  }}>
                    <button type="submit">완료</button>
                  </form>

                  <form onSubmit={e=>{
                    e.preventDefault()
                    store.dispatch(deleteTodo())
                    
                  }}>
                    <button type="submit">삭제</button>
                  </form>
                
    
            </li>

          </ul>
            
        )
    }
}



// List.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired).isRequired,
//     toggleTodo: PropTypes.func.isRequired,
//     deleteTodo:PropTypes.func.isRequired
//   }

export default List;