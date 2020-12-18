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

export default class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: {},
            redirectBack: false
        }
    }

    componentDidMount() {
        this.getOneShow()
    }

    getOneShow = async () => {
        try {
            const id = this.props.match.params.showId
            const response = await axios.get(baseURL + id)
            this.setState({
                shows: response.data.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    deleteShow = async (e) => {
        const id = this.props.match.params.showId
        await axios.delete(baseURL + id)
        .then(this.setState({
            redirectBack: true
        }))
        this.setState({
            redirectToWalkthrough: true 
        })
    }

    render() {
        return(
            <div>
                <img src={this.state.shows.cover} />
                <h1>{this.state.shows.title}</h1>
                <h3>{this.state.shows.where_to_watch}</h3>
                <h4>{this.state.shows.genre}</h4>
                <h4>{this.state.shows.release_date}</h4>
                <h4>{this.state.shows.runtime}</h4>
                <p>{this.state.shows.synopsis}</p>
                <Link to={`./${this.props.match.params.showId}/edit`}><button>Edit</button></Link>
                <button onClick={(e) => this.deleteShow(e)}>Delete</button>
            </div>
        )
    }
}