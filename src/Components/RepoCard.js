import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './RepoCard.module.css';
import cx from 'classnames';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '20%', // 16:9
    },
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

export default function RecipeReviewCard({ api }) {
    console.log(api)
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Grid>
            <Grid className={styles.CardStyle}>
                <Card className={cx(classes.root,styles.InnerCardStyle)}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {api['owner'].avatar_url}
                        </Avatar>
                        }
                    
                    // title={api}      sad
                    // subheader="September 14, 2016"
                    />
                    {/* <CardMedia
                        className={classes.media}
                        image="/static/images/cards/paella.jpg"
                        title="Paella dish"
                    /> */}
                    <CardContent>
                        <h3>{api['name']}</h3>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Description</Typography>
                            <Typography paragraph>Date and Time of creation : {api['created_at']}</Typography>
                            <Typography paragraph>Number of forks for this Repositories : {api['forks']}</Typography>
                            <Typography paragraph>This Repository holds github pages : {api['has_pages']}</Typography>
                            <Typography paragraph>last update for this Repository : {api['pushed_at']}</Typography>
                            <Typography paragraph>Number of watchers for this Repository : {api['watchers_count']}</Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>
    );
}