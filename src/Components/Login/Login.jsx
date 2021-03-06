import { Component } from 'react'
import './login.css';

class Login extends Component {
    state ={
        email : '',
        password : ''
    }

    // Input field on change
    onInputChange = (event) => {
        const {name , value} = event.target;
        this.setState({[name] : value})
    }

    // On submit -- REMINDER : Do not forget me !
    onInputSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        console.log(this.state)
        const {email,password} = this.state
        return (
            <div className="login-container">
                <h1>Log in</h1>
                <div className="login-form">
                    <input type="email" name="email" value={email} className="email" placeholder="Email" onChange={this.onInputChange} required/>
                    <input type="password" name="password" value={password} className="password" placeholder="Password" onChange={this.onInputChange} required/>
                    <button className="btn login" onClick={this.onInputSubmit}>Log in</button>
                </div>
            </div>
        )
    }
}

export default Login

