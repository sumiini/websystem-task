import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../project.css'
class Header extends React.Component{
    render(){
        return(
            <div>
                <h2 className="studentId">201820775</h2>
                <div className="link">
                    <Link className="linkhome" to={`/`}>Home</Link>
                    <Link className="linknew" to={`/review/new`}>New</Link>

                </div>
                
                


            </div>

        );
    }


}

export default Header;