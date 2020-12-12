import React, { Component } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:8000/'

export default class Welcome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            myName: 'Gavin',
            myPass: '123456789',
            myEmail: 'email@email.com'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const payload = {username: this.state.username, password: this.state.password, email: this.state.email}
        axios.post(baseURL + '/placeholder-route/', payload)
        .then(res => res.json())
        if(this.state.username === this.state.myName && this.state.password === this.state.myPass && this.state.email === this.state.myEmail) {
            document.getElementById('welcome').innerHTML = 'Welcome'
        } else {
            document.getElementById('welcome').innerHTML = 'Not Welcome'
        }
    }

    render() {
        return(
            <div>
                <h1 id='welcome'></h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' id='username' onChange={this.handleChange} />
                    <br/>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' onChange={this.handleChange} />
                    <br/>
                    <label htmlFor='email'>Email: </label>
                    <input type='text' name='email' id='email' onChange={this.handleChange} />
                    <br/>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}