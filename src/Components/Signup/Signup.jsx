import { Component } from 'react'
import './signup.css';


class Signup extends Component {
    state ={
        name : '',
        email : '',
        password : '',
    }

    onSignupChange = (event) => {
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    onSignupSubmit = (event) => { // Code here Later
        event.preventDefault()
        console.log("signup")
    }

    render(){
        console.log(this.state)
        const {name,email,password } = this.state
        return (
            <div className="signup-container">
                <h1>Sign up</h1>
                <div className="signup-form">
                    <input type="text" name="name" value={name} onChange={this.onSignupChange} placeholder="Your Name"/>
                    <input type="email" name="email" value={email} onChange={this.onSignupChange} placeholder="Email"/>
                    <input type="password" name="password" value={password} onChange={this.onSignupChange} placeholder="Password"/>
                    <button type="submit" className="btn btn-submit" onClick={this.onSignupSubmit}>Sign up</button>
                </div>
            </div>
        )
    }
}

export default Signup