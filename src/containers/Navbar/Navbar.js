import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { Menu, Contact } from '../../components';
import  Marquee from '../Marquee/Marquee';
import './styles.css'

const Navbar = ({ data }) => {
    return (
        <div className="navbar-wrapper">
            <Container maxWidth="xl">
            <div className="navbar">
                    <Grid container justify="center">
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="menu-wrapper">
                                <div className="menu">
                                    <img src={require('../../assets/img/abc_logo.svg').default} alt='logo' />
                                    <div className="menu-items">
                                        {data.pages.map((menuItem) => (
                                            <a>{ menuItem.title }</a>
                                        ))}
                                    </div>
                                </div>
                            </div>   
                        </Grid>
                        <Grid item item xs={6} sm={6} md={6} lg={6}>
                            <div className="contact-wrapper">
                                <Contact />
                            </div>    
                        </Grid>
                    </Grid>
            </div>
            </Container>
            <Marquee />
        </div>
    )
}

export default Navbar
