import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import RepoCard from './RepoCard';
import { fetchData } from "../api/api";
export default class RepoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
        }
    }
    async componentDidMount() {
        const apiFetched = await fetchData((this.props.input));
        this.setState({ apiData: apiFetched });
    }
    render() {
        const { apiData } = this.state;
        if (apiData.length === 0)
            return <h2>Loading ....</h2>
        
        const Repos = apiData.map((user,index) => {
            const name=apiData[index]['name']
            return <RepoCard key = {index} name={name}/>
        })
        return (
            <Grid>
                {/* <h1>{this.props.input}</h1> */}
                {console.log(apiData)}
                <Grid>{Repos}</Grid>
            </Grid>
        );
    }
}
