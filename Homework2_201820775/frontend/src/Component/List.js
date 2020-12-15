import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ReviewCard from './ReviewCard';


class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
            reviews:this.props.data.alldata
        } 
        //this.deleteReviewById = this.deleteReviewById.bind(this);
    }

    deleteReviewById(id){
        let result = this.state.reviews.filter(i=> i._id !==id.id );
        this.setState({reviews:result,});
        
    }

    render() {
        if(this.state.reviews.length!==0){
            const reviewlist = this.state.reviews.map((i)=>(
                <li key={i._id}>
                    <ReviewCard review={i} onDelete={this.deleteReviewById.bind(this)}/>
                </li>
            ))
            return (
                <ul>{reviewlist}</ul>               
                
                
                
            );

        }
        else{
            return null;
        }
      
    }
}

export default List;
