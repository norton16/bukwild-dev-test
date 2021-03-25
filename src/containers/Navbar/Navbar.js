import { React, useState } from 'react'
import { Container, Grid } from '@material-ui/core';
import { Contact } from '../../components';
import  Marquee from '../Marquee/Marquee';
import './styles.css'

const Navbar = ({ content }) => {
    const [marqueeContent, setMarqueeContent] = useState(content.pages[0]);

    const handleMarqueeUpdate = (index) => {
        setMarqueeContent(content.pages[index]);
    }

    return (
        <>  
            <Container maxWidth="xl">
                <div className="navbar">
                    <Grid container justify="center">
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="menu-wrapper">
                                <div className="menu">
                                    <img src={require('../../assets/img/abc_logo.svg').default} alt='logo' />
                                    <div className="menu-items">
                                        {content.pages.map((menuItem, index) => (
                                            <a key={index} onClick={() => handleMarqueeUpdate(index)}>
                                                { menuItem.title }
                                            </a>
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
            <Marquee marqueeContent={marqueeContent} />
        </>
    )
}

export default Navbar
