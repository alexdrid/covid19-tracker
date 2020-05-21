import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './Header.module.css';
import { Typography } from '@material-ui/core';
import logo from '../../images/virus-clip-art.png';

function Header() {
  return (
    <div className={styles.bar}>
      <AppBar className={styles.bar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            <img className={styles.logo} src={logo} alt="logo" />
            COVID-19 Tracker
          </Typography>
          <Button className={styles.btn} color="inherit">News</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
