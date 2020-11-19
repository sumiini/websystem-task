import React,{Component} from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isClick:true,
            userName:""
        }

    }
    addName=()=>{
        this.setState({userName:document.getElementById('inp').value});
        this.setState({isClick:false});

    }
    render() {
        if(this.state.isClick){

            return(
                <div className="App">
                    <header className="App-header">
                        <h1 id={"title"}>Who are you ?</h1>
                        <input id={"inp"} />

                        <button id={"btn"} onClick={this.addName}>OK</button>

                    </header>


                </div>
            )

        }
        else{
            return(
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1>Hello, {this.state.userName} !</h1>

                    </header>


                </div>
            )
        }



    }
}






export default App;
