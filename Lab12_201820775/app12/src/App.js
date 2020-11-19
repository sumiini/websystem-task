import React,{Component} from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';


class Updatename extends React.Component{
    render() {
        return(
            <h1>Hello ! {this.props.name}</h1>

        );
    }
}


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            userName:""
        }
    }

    addName=()=>{
        this.setState({userName:document.getElementById('inp').value});

    }


    render() {


        return(





            <div className="App">
                <header className="App-header">




                    <h1 id={"title"}>Who are you ?</h1>
                    <input id={"inp"}  />
                    <button id={"btn"} onClick={this.addName}>OK</button>

                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello ! {this.state.userName}</h2>


                </header>
            </div>



        );

        // document.getElementById('btn').onclick=function () {
        //     <h2>hello, {this.userName}</h2>
        // }

    }
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// <img src={logo} className="App-logo" alt="logo" />
// <p>
//     Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
// >
//     Learn React
// </a>

export default App;
