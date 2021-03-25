import React from 'react'
import { Grid } from '@material-ui/core';
import './styles.css'

const Cta = ({ marqueeContent }) => {
    return (
        <div className="cta">
            <Grid container justify="center">
                <Grid item lg={1} />
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <div className="cta-content-left">
                        <p>{marqueeContent.blocks[0].cta}</p>
                    </div>
                </Grid>
                <Grid item lg={1} />
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <div className="cta-content-right">
                        <p>let's talk.</p>
                        <img src={require('../../assets/img/right-arrow.png').default} alt='right-arrow' />
                    </div>
                </Grid> 
            </Grid>
        </div>
    )
}

export default Cta
