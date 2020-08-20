import React from 'react';
import {Grid, IconButton, Collapse} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './CardRepo.module.css';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    
}));

export default function CardRepo({api}){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return(
        <Grid className={cx(styles.card,'tr bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5')}>
            <Grid className="tl">
            <h3>{api['name']}</h3>
            </Grid>
            <IconButton
                            className={cx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>

                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Grid className="tl">
                            <h2>Description : </h2>
                        
                            <h3>Date and Time of creation : {api['created_at']}</h3>
                            <h3>Number of forks for this Repositories : {api['forks']}</h3> 
                            <h3>This Repository holds github pages : {api['has_pages']}</h3>
                            <h3>last update for this Repository : {api['pushed_at']}</h3>
                            <h3>Number of watchers for this Repository : {api['watchers_count']}</h3>
                            </Grid>
                    </Collapse>
        </Grid>
    );
}