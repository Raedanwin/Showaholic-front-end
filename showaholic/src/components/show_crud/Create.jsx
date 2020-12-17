import React, { Component } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

const baseURL = 'http://localhost:8000/api/v1/show/'

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            where_to_watch: "",
            genre: "",
            cover: "",
            release_date: "",
            runtime: "",
            synopsis: "",
            redirectBack: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.defaultState()
    }

    defaultState() {
        this.setState({
            title: "",
            where_to_watch: "",
            genre: "",
            cover: "",
            release_date: "",
            runtime: "",
            synopsis: "",
            redirectBack: false
        })
    }

    handleChange(event) {
        this.state({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const packageCreate = {
            title: this.state.title,
            where_to_watch: this.state.where_to_watch,
            genre: this.state.genre,
            cover: this.state.cover,
            release_date: this.state.release_date,
            runtime: this.state.runtime,
            synopsis: this.state.synopsis
        }
        await axios.post(baseURL, packageCreate).then(
            this.setState({ redirectBack: true })
        )
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='title'>Title</label>
                    <input onChange={this.handleChange} id='title' type='text' />
                    <label htmlFor='where'>Where to watch</label>
                    <input onChange={this.handleChange} id='where' type='text' />
                    <label htmlFor='genre'>Genre</label>
                    <input onChange={this.handleChange} id='genre' type='text' />
                    <label htmlFor='cover'>Image</label>
                    <input onChange={this.handleChange} id='cover' type='text' />
                    <label htmlFor='release'>Release date</label>
                    <input onChange={this.handleChange} id='release' type='text' />
                    <label htmlFor='runtime'>Runtime</label>
                    <input onChange={this.handleChange} id='runtime' type='text' />
                    <label htmlFor='summary'>Summary</label>
                    <input onChange={this.handleChange} id='summary' type='text' />
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        ) 
    }
}