import React from 'react';
import { Card, CardContent,Typography,Grid } from '@material-ui/core';
import CountUp from "react-countup";
import styles from '../Cards/Card.module.css';

const Cards = ({ data:{confirmed,recovered,deaths,lastUpdate}}) => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent className={styles.infected}>
                            <Typography color='textSecondary' gutterBottom >Infected</Typography>
                            <Typography variant='h5' component='h2'>
                                <CountUp
                                    start={0}
                                    end={confirmed?.value}
                                    duration={3}
                                    separator=","
                                />
                            </Typography>
                            <Typography color='textSecondary'>{ new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='subtitle1' component='p'>Number of active cases from COVID-19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent className={styles.recovered}>
                            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                            <Typography variant='h5' component='h2'>
                                <CountUp
                                    start={0}
                                    end={recovered?.value}
                                    duration={3}
                                    separator=","
                                />
                            </Typography>
                            <Typography color='textSecondary'>{ new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='subtitle1' component='p'>Number of recoveries from COVID-19.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardContent className={styles.deaths}>
                            <Typography color='textSecondary' gutterBottom>Death</Typography>
                            <Typography variant='h5' component='h2'>
                                <CountUp
                                    start={0}
                                    end={deaths?.value}
                                    duration={3}
                                    separator=","
                                />
                            </Typography>
                            <Typography color='textSecondary'>{ new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='subtitle1' component='p'>Number of active cases death from COVID-19</Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;