import React from 'react';
import './css/Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Slider, Grid } from '@material-ui/core';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src="https://images.genius.com/b6bcc9399181ca3f43f8951834fb9c72.500x500x1.jpg"
                    alt="album-cover"
                />
                <div className="footer__songInfo">
                    <h4>My Gaming Life</h4>
                    <p>Arsensky, Marin Hoxha, Jon Becker</p>

                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />

            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>

                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>

                    <Grid item xs>
                        <Slider />
                    </Grid>


                </Grid>
            </div>

        </div>
    )
}
