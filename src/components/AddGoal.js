import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../firebase';

class AddGoal extends Component{
  constructor(props){
    super(props);
    this.state = {
      title:''
    }
  }

  addGoal(){
    //console.log("this",this);
    const {email} = this.props.user;
    const {title} = this.state;
    goalRef.push({email,title});
  }

  render(){
    return(
      <div className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control"
            onChange = {event => this.setState({title:event.target.value})}
          />
          <button className="btn btn-success" style={{marginLeft:'5px'}}
          onClick={() => this.addGoal()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state);
  const {user} = state;
  return{
    user
  }
}

export default connect (mapStateToProps,null)(AddGoal);
