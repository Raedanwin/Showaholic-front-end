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
            const id = this.props.match.params.id
            const response = await axios.get(baseURL + id)
            this.setState({
                shows: response.data.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    deleteShow = async (e) => {
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
        return(
            <div>
                
            </div>
        )
    }
}