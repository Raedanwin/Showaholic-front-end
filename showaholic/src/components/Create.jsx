import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
const baseURL = 'http://localhost:8000/api/v1/watchlist/'

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            authour: "",
            redirectBack: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
componentDidMount(){
    this.defaultState()
}
defaultState=()=>{
    this.setState({
        tite:"",
        authour:"",
        redirectBack:false
    })
}
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault()
        const packageCreate = {
            title: this.state.title,
            authour: this.state.authour
        }
        await axios.post(baseURL,  packageCreate).then(
            //do a redirect back to the main page here
            this.setState({redirectBack:true})
        )
    }

    render() {
        if(this.state.redirectBack){
            return <Redirect to={`../collections`} />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='title'>Watchlist title</label>
                    <input onChange={this.handleChange} id='title' type='text'/>
                    <label htmlFor='authour'>Authour name</label>
                    <input onChange={this.handleChange} id='authour' type='text'/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}
