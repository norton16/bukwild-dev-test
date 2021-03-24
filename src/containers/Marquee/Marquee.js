import { React } from 'react'
import { Container, Grid } from '@material-ui/core';
import Cta from '../../components/Cta/Cta'
import './styles.css'

const Marquee = ({ marqueeContent }) => {
    return (
        <div className="marquee-background">
            <Container maxWidth="xl">
                <div className="marquee">
                    <div></div>
                    <div className="marquee-content">
                        <Grid container justify="center">
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <div className="heading-wrapper">
                                    <p className="headline">{marqueeContent.blocks[0].headline}</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <div className="heading-wrapper">
                                    <p className="subhead">{marqueeContent.blocks[0].subhead}</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <Cta /> 
                </div>
            </Container>
            
        </div>
    )
}

export default Marquee
