import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../project.css'

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
          <div className="newdiv">
               
                <label className="newmoviename">Movie Name</label>
                <p/>
                <input name="moviename" ref={this.form.movie_name} ></input>
                <p/>
                <label className="newcontent">Review Content</label>
                <p/>
                <input name="reviewcontent" ref={this.form.review_content}></input>
                <p/>
                <label className="newrate">Rate</label>
                <p/>
                <input name="rate" ref={this.form.rate}></input>
                <p/>
                <button className="submitbtn" onClick={this.submit.bind(this)}>제출</button>
                <button className="cancelbtn" onClick={this.cancel.bind(this)}>취소</button>


          </div>
          
      );
    }
}

export default withRouter(Form);
