import React, { Component } from 'react'
import axios from 'axios'
import { Link,Redirect } from 'react-router-dom'

const baseURL = `http://localhost:8000/api/v1/watchlist/`

export default class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watchlist: {},
            redirectBack: false
        }
    }

    componentDidMount() {
        this.getOneList()
    }

    getOneList = async () => {
        try {
            const id = this.props.match.params.id
            const response = await axios.get(baseURL + id)
            this.setState({
                watchlist: response.data.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    deleteList = async (e) => {
        const id = this.props.match.params.id
        await axios.delete(baseURL + id)
        .then(this.setState({
            redirectBack: true
        }))
        this.setState({
            redirectToWalkthrough: true 
        })
    }

    render() {
        if (this.state.redirectBack) {
            return <Redirect to={`../`} />
        }
        return (
            <div>
                <h1>{this.state.watchlist.title}</h1>
                <h3>{this.state.watchlist.authour}</h3>
                <Link to={`./${this.props.match.params.id}/edit`}><button>Edit</button></Link>
                <button onClick={(e) => this.deleteList(e)}>Delete</button>
            </div>
        )
    }
}