import React, { Component } from 'react'
import axios from "axios";




export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allResults: [],
            search: " "
        }
        this.getSearch = this.getSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
    
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    getSearch = () => {
        const searchQuestion = this.state.search
        console.log("TEST")
        const options = {
            method: 'GET',
            url: 'https://ott-details.p.rapidapi.com/search',
            params: { title: searchQuestion, page: '1' },
            headers: {
                'x-rapidapi-key': 'd7807b4709mshe1476f2340682bbp1393dajsn3cbd1de705d0',
                'x-rapidapi-host': 'ott-details.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data.results)
            return response.data.results
        }).then(res => this.setState({ allResults: res })).catch(function (error) {
            console.error(error);
        });


    }
    render() {
        return (
            <div>
 
                <input onChange={this.handleChange} id='search' type='text' />
                <button onClick={this.getSearch}>Search</button>
                {this.state.allResults.map(result => {
                    return (
                        <div>
                            {result.title}
                        </div>
                    )
                })}
            </div>
        )
    }
}