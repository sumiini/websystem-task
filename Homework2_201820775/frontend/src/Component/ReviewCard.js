import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import request from '../lib/request';
import { stars } from '../lib/star';


class ReviewCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            review:this.props.review
        } 
        
    }

    async deleteReview(){
        const result = await request.deleteReview(this.state.review._id);
        this.props.onDelete(this.state.rev._id);
    }

   

    render() {
        const {review} = this.props;
        

      return (
          <div>
              <h2>{review.movie_name}</h2>
              <h2>{review.review_content}</h2>
              <div>{stars(review.rate)}</div>
              <button onClick={this.deleteReview.bind(this)}>삭제</button>
               

          </div>
          
      );
    }
}

export default ReviewCard;
