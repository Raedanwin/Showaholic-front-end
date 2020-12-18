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

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: {},
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
        this.getShows()
    }

    getShows = async () => {
        try {
            const id = this.props.match.params.id
            const response = await axios.get(baseURL + id)
            this.setState({
                title: response.data.data.title,
                where_to_watch: response.data.data.where_to_watch,
                genre: response.data.data.genre,
                cover: response.data.data.cover,
                release_date: response.data.data.release_date,
                runtime: response.data.data.runtime,
                synopsis: response.data.data.synopsis
            })
        } catch (err) {
            console.log(err)
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit=async(event)=> {
        event.preventDefault()
        const id = this.props.match.params.id
        const packageUpdate = {
            title: this.state.title,
            where_to_watch: this.state.where_to_watch,
            genre: this.state.genre,
            cover: this.state.cover,
            release_date: this.state.release_date,
            runtime: this.state.runtime,
            synopsis: this.state.synopsis
        }
        await axios.put(baseURL + id, packageUpdate)
        .then(this.setState({
            redirectBack: true
        }))
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='title'>Title</label>
                    <input onChange={this.handleChange} id='title' type='text' value={this.state.title} />
                    <label htmlFor='where'>Where to watch</label>
                    <input onChange={this.handleChange} id='where' type='text' value={this.state.where_to_watch} />
                    <label htmlFor='genre'>Genre</label>
                    <input onChange={this.handleChange} id='genre' type='text' value={this.state.genre} />
                    <label htmlFor='cover'>Image</label>
                    <input onChange={this.handleChange} id='cover' type='text' value={this.state.cover} />
                    <label htmlFor='release'>Release date</label>
                    <input onChange={this.handleChange} id='release' type='text' value={this.state.release_date} />
                    <label htmlFor='runtime'>Runtime</label>
                    <input onChange={this.handleChange} id='runtime' type='text' value={this.state.runtime} />
                    <label htmlFor='summary'>Summary</label>
                    <input onChange={this.handleChange} id='summary' type='text' value={this.state.synopsis} />
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}