import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class ReviewCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        } 
    }

    async deleteReview(){

    }

   

    render() {
        const {review} = this.props;
        

      return (
          <div>
              <h2>{review.movie_name}</h2>
              <h2>{review.review_content}</h2>
              
              <button onClick={this.deleteReview.bind(this)}>삭제</button>
               

          </div>
          
      );
    }
}

export default ReviewCard;
