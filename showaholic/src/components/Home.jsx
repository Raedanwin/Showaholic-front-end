import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <a href='/collections'><h1>Collections</h1></a>
                <a href='/search'><h1>Search for something</h1></a>
            </div>
        )
    }
}