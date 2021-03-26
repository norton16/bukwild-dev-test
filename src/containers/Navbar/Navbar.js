import { React, useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import { Contact } from '../../components'
import  Marquee from '../Marquee/Marquee'
import './styles.css'
import * as fadeAnimation from '../../assets/js/app'

const Navbar = ({ content }) => {
    // State for triggering fade-in effect on component load 
    const [navbarDelay, setNavbarDelay] = useState(false);

    const [marqueeContent, setMarqueeContent] = useState(content.pages[0]);

    // Updates the marquee content state with the corresponding object at the prop page array's index
    const handleMarqueeUpdate = (index) => {
        window.location.hash = content.pages[index].slug;     
        setMarqueeContent(content.pages[index]);
    }

    // When component mounts, the navbarDelay state becomes true  
    useEffect(() => {
        fadeAnimation.navBarFade(setNavbarDelay);
    }, [])

    return (
        <>  
            <Container maxWidth="xl">
                <div className="navbar">
                    <Grid container justify="center">
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            {/* When navbarDelay state is true, fade-in effect is added to the navbar */}
                            <div className={`menu-wrapper fade-in ${navbarDelay && 'fade-in-visible'}`}>
                                <div className="menu">
                                    <img src={require('../../assets/img/abc_logo.svg').default} alt='logo' />
                                    <div className="menu-items">
                                        {/* Create menu from props */}
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
                            <div className={`contact-wrapper fade-in ${navbarDelay && 'fade-in-visible'}`}>
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
