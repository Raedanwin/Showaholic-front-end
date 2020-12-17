import React, { Component } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const baseURL = 'http://localhost:8000/api/v1/show/'

export default class Shows extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allShows: []
        }
    }

    componentDidMount() {
        this.getAllShows()
    }

    getAllShows= async ()=> {
        try {
            const response = await axios.get(baseURL)
            console.log(response)
            this.setState({
                allShows: response.data.data
            })
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return(
            <div>
                {this.state.allShows.map(show => {
                    return (
                        <a href={`/show/${show.show_id}`}>
                            <div class='shows'>
                                <h1>{show.title}</h1>
                                <h3>{show.where_to_watch}</h3>
                            </div>
                        </a>
                    )
                })}
            </div>
        )
    }
}