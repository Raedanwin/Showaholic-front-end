import React, { Component } from 'react'
import axios from 'axios'
import { Link,Redirect } from 'react-router-dom'
export default class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watchlist: {},
            redirectBack: false
        }
    }
    componentDidMount() {
        this.getOneShow()
    }
    getOneShow = async () => {
        try {
            const id = this.props.match.params.id
            console.log(id)
            //go get the watchlist
            const response = await axios.get(`http://localhost:8000/api/v1/watchlist/${id}`)
            console.log(response.data.data)
            //set it to allwatchlist state
            this.setState({ watchlist: response.data.data })
        } catch (err) {
            console.log(err)
        }

    }
    deleteShow = async (e) => {
        const id = this.props.match.params.id
        await axios.delete(`http://localhost:8000/api/v1/watchlist/${id}`).then(this.setState({ redirectBack: true }))
        this.setState({ redirectToWalkthrough: true })
    }
    render() {
        if (this.state.redirectBack) {
            return <Redirect to={`../`} />
        }
        return (
            <div>
                {this.state.watchlist.authour}<Link to={`./${this.props.match.params.id}/edit`}>Edit</Link><button onClick={(e) => this.deleteShow(e)}>Delete</button>

            </div>
        )
    }
}