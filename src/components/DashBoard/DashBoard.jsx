import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { green, orange, red } from '@material-ui/core/colors';
import CountUp from 'react-countup';
import classNames from 'classnames';

import { BarChart, LineChart } from '../';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 40,
  },
  paper: {
    padding: theme.spacing(3),
  },
  confirmed: {
    borderLeft: `10px solid ${orange[500]}`,
  },
  deaths: {
    borderLeft: `10px solid ${red[500]}`,
  },
  recovered: {
    borderLeft: `10px solid ${green[500]}`,
  },
}));

function DashBoard(props) {
  const classes = useStyles();

  const {
    data: { confirmed, recovered, deaths },
  } = props;

  let cardData = [
    {
      title: 'Confirmed',
      description: 'Number of confirmed cases of COVID-19',
      value: confirmed ? confirmed.value : 0,
      isLoading: confirmed ? false : true,
      style: classes.confirmed,
    },
    {
      title: 'Deaths',
      description: 'Number of deaths caused from COVID-19',
      value: deaths ? deaths.value : 0,
      isLoading: deaths ? false : true,
      style: classes.deaths,
    },
    {
      title: 'Recovered',
      description: 'Number of recoveries from COVID-19',
      value: recovered ? recovered.value : 0,
      isLoading: recovered ? false : true,
      style: classes.recovered,
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cardData.map((data, index) => (
          <Grid key={index} item xs={12} sm={12} md={4}>
            <Paper className={classNames(classes.paper, data.style)}>
              {!data.isLoading ? (
                <div className={classes.content}>
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
                  {/* <Typography color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                  </Typography> */}
                  <Typography variant="body2">{data.description}</Typography>
                </div>
              ) : (
                <Typography variant="h5" color="textSecondary">
                  Loading
                </Typography>
              )}
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            {/* <Chart data={props.data} country={props.country} /> */}
            <LineChart data={props.data} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <BarChart data={props.data} country={props.country} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoard;
