import React, { Component } from 'react';
import logo from './logo.svg';
import {Redirect} from 'react-router-dom'

class Login extends Component {

  constructor(props){

    super(props);

    this.state={
      email:'',
      password:'',
      loggedIn:false,
    };

    this.handleChange=this.handleChange.bind(this);
    this.submit=this.submit.bind(this);

  }

  componentDidMount() {
      if(window.token){
        this.setState({loggedIn:true});
      }
  }


  handleChange(event){
      let name=event.target.name;
      let value=event.target.value;
       let data={};
       data[name]=value;

       this.setState(data);
   
    
  }

  render() {

    if(this.state.loggedIn){
      return <Redirect to='/' />
    }

    return (
          <div className="App">
            
            <h4>Login Form</h4>

            <form onSubmit={this.submit}>
                <div>
                    <input type="text" name='email' value={this.state.email} placeholder="email" onChange={this.handleChange} />
                </div>

                <div>
                    <input type="password" name='password' value={this.state.password} onChange={this.handleChange} placeholder="password" />
                </div>

                <input type='submit' value='Submit'/>

            </form>

          </div>
      
    );
  }

  submit(e){
    this.setState({loggedIn:true})
    e.preventDefault();

    window.axios.post('http://passport.test/api/login',{email:this.state.email,password:this.state.password})
    .then(response=>{
       console.log(response);

       this.setState({loggedIn:true});

       localStorage.setItem('token',response.data.auth.access_token)
    });
  }
}

export default Login;
