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
                <Link to={`/collections`}><button class='homeP'>Collections</button></Link>
                <Link to={`/search`}><button class='homeP'>Search for something</button></Link>
            </div>
        )
    }
}