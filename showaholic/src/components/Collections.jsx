import React, { Component } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const baseURL = 'http://localhost:8000/api/v1/watchlist/'

export default class Collections extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allWatchlist: []
        }
    }

    componentDidMount() {
        this.getAllwatchlists()
    }

    getAllwatchlists = async () => {
        try {
            const response = await axios.get(baseURL)
            this.setState({
                allWatchlist: response.data.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div id='create-main'>
                <h1 id='coll-head'>Your Watchlists</h1>
                <div id='create-sub'>
                {this.state.allWatchlist.map(watchlist => {
                    return (
                        <a href={`/watchlist/${watchlist.watchlist_id}`}>
                        <div class='watchlists'>
                            <h1 class='list-title'>{watchlist.title}</h1>
                            <h4 class='list-title'>Made by: {watchlist.authour}</h4>
                        </div>
                        </a>
                    )}
                )}
                </div>
                <Link to='/watchlist/create'><button id='create-list'>Create new watchlist</button></Link>
            </div>
        )
    }
}