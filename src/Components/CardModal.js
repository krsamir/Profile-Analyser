import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import cx from 'classnames';
import styles from './CardModal.module.css';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export default function SpringModal({ api }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid>
            <Grid onClick={handleOpen} className={cx(styles.card, 'tc  dib br3 pa1 ma2 grow bw2 shadow-5')}>
                <h3>{api['name']}</h3>
            </Grid>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Grid className={cx(styles.modal, 'tc bg-white dib br3 pa3 ma2 bw2 shadow-5 dark-red')}>
                        <Grid className="tl">
                            <h2 id="spring-modal-title">Description : </h2>

                            <p id="spring-modal-description">Date and Time of creation : {api['created_at']}</p>
                            <p id="spring-modal-description">Number of forks for this Repositories : {api['forks']}</p>
                            <p id="spring-modal-description">This Repository holds github pages : {api['has_pages']?"Yes":"No"}</p>
                            <p id="spring-modal-description">last update for this Repository : {api['pushed_at']}</p>
                            <p id="spring-modal-description">Number of watchers for this Repository : {api['watchers_count']}</p>
                        </Grid>
                    </Grid>
                </Fade>
            </Modal>
        </Grid>
    );
}
