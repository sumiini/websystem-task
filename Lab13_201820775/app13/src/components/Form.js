import React from 'react';
import {connect} from 'react-redux';

const Form = ({dispatch})=>{
    let input
    
        return(
            <div className="form-div">


                <form onSubmit={e=>{
                    e.preventDefault()
                    dispatch(CREATE_TODO(input.value))
                    input.value=''
                }}>
                    <input ref={node=>input=node} type="text"></input>
                    <button type="submit" >OK</button>

                </form>
                
                
                
            </div>
        )
    
}

/*


<form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                    return
                    }
                    dispatch(CREATE_TODO(input.value))
                    input.value = ''
                }}>
                    <input ref={node => input = node} />
                    <button type="submit">
                    OK
                    </button>
                </form>



const mapStateToProps = (state)=>{
    return{
        text:inputtext.value
    }
}

*/ 


export default connect()(Form);