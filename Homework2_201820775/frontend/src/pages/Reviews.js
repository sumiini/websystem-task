import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import request from '../lib/request';
import List from '../Component/List';

class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            reviews:[],
        };
    }
    async componentDidMount(){
        this.setState({reviews:request.getReviews()})
    }

    
    render(){
        if(this.state.reviews.length===0){
            return null;
        }
        else{
            return(
                <>
                    <List data={this.state.reviews} />
                </>
                
    
            );
        

        }
    }  

}

export default Reviews;