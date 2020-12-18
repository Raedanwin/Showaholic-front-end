import React, { Component } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import '../App.css'

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

    getAllShows = async () => {
        try {
            const id = parseInt(this.props.match.params.id)
            const response = await axios.get(baseURL)
            // console.log(response.data.data[0].watchlist_id.watchlist_id)
            let filteredArray = []
            for (let i = 0; i < response.data.data.length; i++) {
                if(parseInt(response.data.data[i].watchlist_id.watchlist_id)===id){
                    filteredArray.push(response.data.data[i])
                }
            }
            this.setState({
                allShows: filteredArray
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                {this.state.allShows.map(show => {
                    return (
                        <a href={`/watchlist/${show.watchlist_id.watchlist_id}/show/${show.show_id}`}>
                            <div class='shows'>
                                <h1>{show.title}</h1>
                                <img src={show.cover}/>
                            </div>
                        </a>
                    )
                })}
            </div>
        )
    }
}