import { React, useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import Cta from '../../components/Cta/Cta'
import './styles.css'
import * as fadeAnimation from '../../assets/js/app'

const Marquee = ({ marqueeContent }) => {
    // State for triggering fade-in effect on component load
    const [backgroundDelay, setBackgroundDelay] = useState(false);

    const [marqueeDelay, setMarqueeDelay] = useState(false);

    // Passes background image path to marquee as an inline style
    const slide = require(`../../assets/img/${marqueeContent.blocks[0].background}`).default;
    
    useEffect(() => {
        window.location.hash = marqueeContent.slug;
        fadeAnimation.marqueeFade(setBackgroundDelay, setMarqueeDelay)
    }, [])

    return (
        <div className={`fade-in ${backgroundDelay && 'fade-in-visible'} background-fade`}>
            <div className="marquee-background" style={{ backgroundImage: `url(${slide})` }}>
                <Container maxWidth="xl">
                    <div className={`marquee fade-in ${marqueeDelay && 'fade-in-visible'}`}>
                        <div></div>
                        <div className="marquee-content">
                            <Grid container justify="center">
                                {/* Header text */}
                                <Grid item xs={12} sm={12} md={12} lg={5}>
                                    <div className="heading-wrapper">
                                        <p className="headline">{marqueeContent.blocks[0].headline}</p>
                                    </div>
                                </Grid>
                                <Grid item lg={1} />
                                {/* Subhead text */}
                                <Grid item xs={12} sm={12} md={12} lg={4}>
                                    <div className="heading-wrapper">
                                        <p className="subhead">{marqueeContent.blocks[0].subhead}</p>
                                    </div>
                                </Grid>
                                <Grid item lg={2} />
                            </Grid>
                        </div>
                        {/* Pass prop data to CTA component  */}
                        <Cta marqueeContent={marqueeContent} /> 
                    </div>
                </Container>      
            </div>
        </div>
    )
}

export default Marquee
