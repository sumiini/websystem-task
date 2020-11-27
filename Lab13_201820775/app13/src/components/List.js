import React from 'react';


class List extends React.Component{
    render(){
        return(
            <div>
                <h1>List.js 컴포넌트</h1>
                <ul>
                    <li>
                        <span></span>
                        <button onClick="">완료</button>
                        <button onClick="">삭제</button>
                    </li>
                </ul>

            </div>
            
        )
    }
}

export default List;