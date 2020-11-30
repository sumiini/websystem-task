import React from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../actions/todo';
import * as todo from '../actions/todo';

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: todo })


console.log(store.getState());


class Form extends React.Component{

    

    constructor(props) {
        super(props);
        
    }

//action 을 reducer로 보낸다 = dispatch
    render(){
        let input;
        return(
            <div className="form-div">

                <form onSubmit={e=>{
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    store.dispatch(createTodo(input.value))
                    input.value=''
                }}>
                    <input ref={node => input = node} type="text"></input>
                    <button type="submit" >추가</button>
                    {input}
                </form>
                

                
                
                
            </div>
        )
        
    
    }
    
}



export default connect()(Form);