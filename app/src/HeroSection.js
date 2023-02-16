import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundImage: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function HeroSection() {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Box textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Learn Anything, Anytime, Anywhere.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Join our community and start your learning journey today.
        </Typography>
        <Button variant="contained" color="secondary" className={classes.button}>
          Get Started
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Access All ELEARNING
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;