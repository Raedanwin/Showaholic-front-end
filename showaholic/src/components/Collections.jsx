import React, { Component } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

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
            //go get the watchlist
            const response = await axios.get('http://localhost:8000/api/v1/watchlist/')
            console.log(response.data.data)
            //set it to allwatchlist state
            this.setState({ allWatchlist: response.data.data })
        } catch (err) {
            console.log(err)
        }

    }



    render() {
        return (
            <div>
                {this.state.allWatchlist.map(watchlist => {
                    return (
                        <div>
                            <a href='/watchlist/<id>'><h1>{watchlist.title}</h1></a>
                            <a href='/watchlist/<id>'><h4>{watchlist.authour}</h4></a>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}