import React,{Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router-dom';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      error:{
        message:''
      }
    }
  }

  signIn(){
    console.log("state is",this.state);
    const {email,password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
    this.setState({error});
    })
  }

  render(){
    return(
      <div className="form-inline" style={{margin:'5%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input type="text" className="form-control" style={{marginRight:'5px'}}
             placeholder="email"
            onChange={event => this.setState({email:event.target.value})}/>
          <input type="password" className="form-control" style={{marginRight:'5px'}}
             placeholder="password"
            onChange={event => this.setState({password:event.target.value})} />
          <button className="btn btn-primary" type="button" onClick={() => this.signIn()}>
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
          <Link to="/signup">Sign Up Instead</Link>
      </div>
    )
  }
}

export default SignIn;
