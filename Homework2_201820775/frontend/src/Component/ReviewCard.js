import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import request from '../lib/request';
import { stars } from '../lib/star';


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
        console.log("++++++++"+this.props.review._id)
        const delresult = await request.deleteReview(delid);
        console.log("========"+this.props.review._id)
        const result = await this.props.onDelete(delid);
        //this.props.history.push("/");

    }

   

    render() {
        const {review} = this.props;
       

      return (
          <div>
                    {review.movie_name}
                    {review.review_content}
                    {stars(review.rate)}
                    <button onClick={this.deleteReview.bind(this)}>삭제</button>

          </div>
          
      );
    }
}

export default ReviewCard;
