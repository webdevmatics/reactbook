import React, { Component } from 'react';
import logo from './logo.svg';


class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            name:'',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);

    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        console.log(name, value)
        let data = {};
        data[name] = value;

        this.setState(data);


    }

    render() {
        return (
            <div className="App">

                <h4>Register Form</h4>

                <form onSubmit={this.submit}>
                    <div>
                        <input type="text" name='name' value={this.state.name} placeholder="name" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="text" name='email' value={this.state.email} placeholder="email" onChange={this.handleChange} />
                    </div>

                    <div>
                        <input type="password" name='password' value={this.state.password} onChange={this.handleChange} placeholder="password" />
                    </div>

                    <input type='submit' value='Submit' />

                </form>

            </div>

        );
    }

    submit(e) {
        e.preventDefault();

        window.axios.post('http://passport.test/api/register', { email: this.state.email,name:this.state.name, password: this.state.password })
            .then(response => {

                localStorage.setItem('token', response.data.auth.access_token)
                
            })
            ;
    }
}

export default Login;
