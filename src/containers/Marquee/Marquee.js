import React from 'react'
import { Container, Grid } from '@material-ui/core';
import Cta from '../../components/Cta/Cta'
import './styles.css'

const Marquee = () => {
    return (
        <div className="marquee">
            <div className="marquee-content">
                {/* <Container maxWidth="xl"> */}
                        <Grid container justify="center">
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <p>asdf</p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Grid>
                        </Grid>
                {/* </Container> */}
            </div>
            <Cta />
        </div>
    )
}

export default Marquee
