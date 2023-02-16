import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My E-Learning Website
          </Typography>
          <Button color="inherit" className={classes.button}>Log In</Button>
          <Button color="inherit" className={classes.button}>Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;