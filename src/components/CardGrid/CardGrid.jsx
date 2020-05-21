import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './CardGrid.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

function Cards(props) {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = props;

  let cardData = [];

  if (!confirmed || !recovered | !deaths) {
    return 'Loading...';
  } else {
    cardData = [
      {
        title: 'Confirmed',
        description: 'Number of active cases of COVID-19',
        value: confirmed.value,
        style: styles.confirmed,
      },
      {
        title: 'Recovered',
        description: 'Number of recoveries from COVID-19',
        value: recovered.value,
        style: styles.recovered,
      },
      {
        title: 'Deaths',
        description: 'Number of deaths caused from COVID-19',
        value: deaths.value,
        style: styles.deaths,
      },
    ];
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
        {cardData.map((data, index) => (
          <Grid
            key={index}
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, data.style)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={data.value}
                  duration={2.5}
                  seperator="."
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{data.description}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Cards;
