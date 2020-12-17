import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const baseURL = 'http://localhost:8000/api/v1/watchlist/'

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watchList: {},
            title: "",
            authour:'',
            redirectBack: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount() {
        this.getWatchList()
    }

    getWatchList = async () => {
        try {
            const id = this.props.match.params.id
            const response = await axios.get(baseURL + id)
            this.setState({
                title: response.data.data.title,
                authour:response.data.data.authour 
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

    handleUpdate = async (event) => {
        event.preventDefault()
        const id = this.props.match.params.id
        const packageUpdate = {
            title: this.state.title,
            authour: this.state.authour
        }
        await axios.put(baseURL + id, packageUpdate)
        .then(this.setState({ 
            redirectBack: true 
        }))
    }

    render() {
        if (this.state.redirectBack) {
            return <Redirect to={`../${this.props.match.params.id}`} />
        }
        return (
            <div>
                <form onSubmit={this.handleUpdate}>
                    <label htmlFor='title'>Watchlist title</label>
                    <input onChange={this.handleChange} id='title' type='text' value={this.state.title}/>
                    <label htmlFor='authour'>Authour name</label>
                    <input onChange={this.handleChange} id='authour' type='text' value={this.state.authour}/>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}
