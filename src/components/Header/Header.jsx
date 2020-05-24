import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/virus-clip-art.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#264653',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img className={classes.logo} src={logo} alt="logo" />
            COVID-19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
