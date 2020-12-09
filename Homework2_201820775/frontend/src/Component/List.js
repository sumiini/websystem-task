import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ReviewCard from './ReviewCard';


class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
            reviews:this.props.data
        } 
    }

    deleteReviewById(id){
        const result = this.state.reviews.filter(i=> i._id !==id);
       
        this.setState({reviews:result});
        
        
    }

    render() {
        if(this.state.reviews.length!==0){
            return (
                
                <>
                <ReviewCard review={this.state.reviews} onDelete={this.deleteReviewById.bind(this)}/>
                </>
                
            );

        }
      
    }
}

export default List;
