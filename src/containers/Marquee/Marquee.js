import { React } from 'react'
import { Container, Grid } from '@material-ui/core';
import Cta from '../../components/Cta/Cta'
import './styles.css'

const Marquee = ({ marqueeContent }) => {
    let slide = require(`../../assets/img/${marqueeContent.blocks[0].background}`).default;

    return (
        <div className="marquee-background" style={{ backgroundImage:`url(${slide})` }}>
            <Container maxWidth="xl">
                <div className="marquee">
                    <div></div>
                    <div className="marquee-content">
                        <Grid container justify="center">
                            <Grid item xs={12} sm={12} md={12} lg={4}>
                                <div className="heading-wrapper">
                                    <p className="headline">{marqueeContent.blocks[0].headline}</p>
                                </div>
                            </Grid>
                            <Grid item lg={2} />
                            <Grid item xs={12} sm={12} md={12} lg={4}>
                                <div className="heading-wrapper">
                                    <p className="subhead">{marqueeContent.blocks[0].subhead}</p>
                                </div>
                            </Grid>
                            <Grid item lg={2} />
                        </Grid>
                    </div>
                    <Cta marqueeContent={marqueeContent}/> 
                </div>
            </Container>      
        </div>
    )
}

export default Marquee
