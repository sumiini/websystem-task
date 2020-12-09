import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
class Header extends React.Component{
    render(){
        return(
            <div>
                <h2>201820775</h2>
                <Link to={`/`}>Home</Link>
                <Link to={`/review/new`}>New</Link>
                


            </div>

        );
    }


}

export default Header;