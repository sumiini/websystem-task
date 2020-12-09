import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class Form extends React.Component {
    constructor(props){
        super(props);
        this.form={
            movie_name: React.createRef(),
            review_content: React.createRef(),
            rate: React.createRef()
        } 
        this.submit = this.submit.bind(this)
    }

    async submit(){
        const data={
            movie_name:this.form.movie_name.current.value,
            review_content:this.form.review_content.current.value,
            rate:this.form.rate.current.value
        }
        const echo_result = await this.props.onSubmit(data);
        console.log(echo_result);
        this.props.history.push("/");
    }

    cancel(){
        this.props.history.goBack();
    }

    render() {
      return (
          <div>
               
                <label>Movie Name</label>
                <input name="moviename" ref={this.form.movie_name} ></input>
                <label>Review Content</label>
                <input name="reviewcontent" ref={this.form.review_content}></input>
                <label>Rate</label>
                <input name="rate" ref={this.form.rate}></input>
                <button onClick={this.submit.bind(this)}>제출</button>
                <button onClick={this.cancel.bind(this)}>취소</button>


          </div>
          
      );
    }
}

export default withRouter(Form);
