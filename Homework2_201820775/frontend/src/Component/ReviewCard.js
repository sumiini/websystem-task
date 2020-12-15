import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import request from '../lib/request';
import { stars } from '../lib/star';
import { Link } from "react-router-dom";

class ReviewCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            reviews:this.props.review
        } 
        this.deleteReview = this.deleteReview.bind(this);

    }

    async deleteReview(){
        const delid={
            id:this.props.review._id
        }
        const delresult = await request.deleteReview(delid);
        const result = await this.props.onDelete(delid);
        
    }

    render() {
        const {review} = this.props;
       

      return (
          <div>
              <h4>Movie Name</h4>
              <p/>
              {review.movie_name}
              <p/>
              <h4>Movie Content</h4>
              <p/>
              {review.review_content}
              <p/>
              <h4>Rate</h4>
              <p/>
              {stars(review.rate)}
              <p/>
              <button onClick={this.deleteReview.bind(this)}>삭제</button>

          </div>
          
      );
    }
}

export default ReviewCard;
