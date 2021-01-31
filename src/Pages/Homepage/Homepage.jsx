import { Component } from 'react';
import './homepage.css'

class HomePage extends Component {
    state ={
        name : 'ajay',
        email : 'ajay@gmail.com',
        logincount : 1
    }

render() {
    const {name , email, logincount} = this.state
    return (
        <div className="homepage">
            <div className="login-count">
                <h3>hey , {name}</h3>
                <h2> Your Login Counts </h2>
                <h2>{logincount}</h2>
            </div>
            <div className="email-info">
                <h2>{email}</h2>
            </div>
        </div>
    )
}
}

export default HomePage;