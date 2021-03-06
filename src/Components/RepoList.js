import React, { Component } from 'react';
// import CardRepo from './CardRepo'
import {Grid} from '@material-ui/core'
import CardModal from './CardModal'
import { fetchData } from "../api/api";
import styles from './RepoList.module.css'
import LoadingImage from '../Images/Loading.jpeg'
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
        if (!apiData[0])
        return <img className = {styles.LoadingImage}  src={LoadingImage} alt="Loading ..." />;
        
        // console.log(apiData)
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
