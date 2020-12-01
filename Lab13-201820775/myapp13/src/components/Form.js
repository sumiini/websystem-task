import React from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../actions/todo';
import {useDispatch} from 'react-redux'

const Form=()=>{
    const dispatch=useDispatch();
    let inputText;

//action 을 reducer로 보낸다 = dispatch
    return(
        <div className="form-div">
            <form onSubmit={e=>{
                e.preventDefault()
                {console.log(inputText.value)}

                dispatch(createTodo(inputText.value))
                inputText.value='';
            }}>
                <input ref={node => inputText = node} ></input>
                <button type="submit" >추가</button>

            </form>



        </div>
    )


}


export default connect()(Form);