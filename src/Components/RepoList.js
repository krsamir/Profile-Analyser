import React, { Component } from 'react';
// import CardRepo from './CardRepo'
import CardModal from './CardModal'
import { fetchData } from "../api/api";
import styles from './RepoList.module.css'
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
            const api=apiData[index]
            // return <CardRepo key = {index} api={api}/>
            return <CardModal key = {index} api={api}/>
        })
        return (
            <div className={styles.bigcard}>
                {/* <h1>{this.props.input}</h1> */}
            {Repos}
            </div>
        );
    }
}
